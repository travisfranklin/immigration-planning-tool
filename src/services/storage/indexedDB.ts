/**
 * IndexedDB Storage Service
 * Handles all local database operations for the application
 */

const DB_NAME = 'immigration-pipeline';
const DB_VERSION = 2; // Incremented for flowchart progress store

export const STORE_NAMES = {
  USER_PROFILES: 'userProfiles',
  VIABILITY_SCORES: 'viabilityScores',
  COUNTRY_RULES: 'countryRules',
  FLOWCHART_PROGRESS: 'flowchartProgress',
};

let db: IDBDatabase | null = null;

/**
 * Initialize the IndexedDB database
 */
export async function initializeDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      reject(new Error('Failed to open IndexedDB'));
    };

    request.onsuccess = () => {
      db = request.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;

      // Create object stores if they don't exist
      if (!database.objectStoreNames.contains(STORE_NAMES.USER_PROFILES)) {
        database.createObjectStore(STORE_NAMES.USER_PROFILES, { keyPath: 'id' });
      }

      if (!database.objectStoreNames.contains(STORE_NAMES.VIABILITY_SCORES)) {
        const viabilityStore = database.createObjectStore(STORE_NAMES.VIABILITY_SCORES, { keyPath: 'id' });
        viabilityStore.createIndex('userId', 'userId', { unique: false });
        viabilityStore.createIndex('countryCode', 'countryCode', { unique: false });
      }

      if (!database.objectStoreNames.contains(STORE_NAMES.COUNTRY_RULES)) {
        database.createObjectStore(STORE_NAMES.COUNTRY_RULES, { keyPath: 'countryCode' });
      }

      if (!database.objectStoreNames.contains(STORE_NAMES.FLOWCHART_PROGRESS)) {
        const progressStore = database.createObjectStore(STORE_NAMES.FLOWCHART_PROGRESS, { keyPath: 'id' });
        progressStore.createIndex('userId', 'userId', { unique: false });
        progressStore.createIndex('programId', 'programId', { unique: false });
      }
    };
  });
}

/**
 * Get a reference to the database
 */
export async function getDatabase(): Promise<IDBDatabase> {
  if (db) {
    return db;
  }
  return initializeDatabase();
}



/**
 * Add a record to a store
 */
export async function addRecord<T>(storeName: string, record: T): Promise<IDBValidKey> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(record);

      request.onerror = () => {
        console.error('[IndexedDB] Add failed:', request.error);
        reject(new Error(`Failed to add record to ${storeName}`));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      transaction.onerror = () => {
        console.error('[IndexedDB] Transaction error:', transaction.error);
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      console.error('[IndexedDB] Add exception:', error);
      reject(error);
    }
  });
}

/**
 * Update a record in a store
 */
export async function updateRecord<T>(storeName: string, record: T): Promise<IDBValidKey> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(record);

      request.onerror = () => {
        console.error('[IndexedDB] Update failed:', request.error);
        reject(new Error(`Failed to update record in ${storeName}`));
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      transaction.onerror = () => {
        console.error('[IndexedDB] Transaction error:', transaction.error);
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      console.error('[IndexedDB] Update exception:', error);
      reject(error);
    }
  });
}

/**
 * Delete a record from a store
 */
export async function deleteRecord(storeName: string, key: IDBValidKey): Promise<void> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);

      request.onerror = () => {
        reject(new Error(`Failed to delete record from ${storeName}`));
      };

      request.onsuccess = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Get a single record by key
 */
export async function getRecord<T>(storeName: string, key: IDBValidKey): Promise<T | undefined> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);

      request.onerror = () => {
        reject(new Error(`Failed to get record from ${storeName}`));
      };

      request.onsuccess = () => {
        resolve(request.result as T | undefined);
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Get all records from a store
 */
export async function getAllRecords<T>(storeName: string): Promise<T[]> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onerror = () => {
        reject(new Error(`Failed to get all records from ${storeName}`));
      };

      request.onsuccess = () => {
        resolve(request.result as T[]);
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Query records by index
 */
export async function queryByIndex<T>(
  storeName: string,
  indexName: string,
  value: IDBValidKey
): Promise<T[]> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll(value);

      request.onerror = () => {
        reject(new Error(`Failed to query ${storeName} by ${indexName}`));
      };

      request.onsuccess = () => {
        resolve(request.result as T[]);
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Clear all records from a store
 */
export async function clearStore(storeName: string): Promise<void> {
  const database = await getDatabase();
  return new Promise((resolve, reject) => {
    try {
      const transaction = database.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.clear();

      request.onerror = () => {
        reject(new Error(`Failed to clear ${storeName}`));
      };

      request.onsuccess = () => {
        resolve();
      };

      transaction.onerror = () => {
        reject(new Error(`Transaction failed for ${storeName}`));
      };
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Clear entire database (delete all data)
 */
export async function clearDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    // Close existing connection
    if (db) {
      db.close();
      db = null;
    }

    // Delete the database
    const request = indexedDB.deleteDatabase(DB_NAME);

    request.onerror = () => {
      reject(new Error('Failed to delete database'));
    };

    request.onsuccess = () => {
      resolve();
    };

    request.onblocked = () => {
      reject(new Error('Database deletion blocked. Please close all tabs using this application.'));
    };
  });
}
