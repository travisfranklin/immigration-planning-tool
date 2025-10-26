/**
 * ISCO-08 Occupation Codes
 * International Standard Classification of Occupations (2008)
 * 
 * This is a curated list of the most common occupation codes
 * relevant for EU immigration applications.
 * 
 * Full ISCO-08 classification: https://www.ilo.org/public/english/bureau/stat/isco/isco08/
 */

export interface OccupationCode {
  code: string;
  title: string;
  category: string;
}

export const ISCO_08_CODES: OccupationCode[] = [
  // Managers (1xxx)
  { code: '1120', title: 'Senior Government Officials', category: 'Managers' },
  { code: '1211', title: 'Finance Managers', category: 'Managers' },
  { code: '1212', title: 'Human Resource Managers', category: 'Managers' },
  { code: '1213', title: 'Policy and Planning Managers', category: 'Managers' },
  { code: '1219', title: 'Business Services Managers', category: 'Managers' },
  { code: '1221', title: 'Sales and Marketing Managers', category: 'Managers' },
  { code: '1222', title: 'Advertising and Public Relations Managers', category: 'Managers' },
  { code: '1223', title: 'Research and Development Managers', category: 'Managers' },
  { code: '1330', title: 'Information and Communications Technology Service Managers', category: 'Managers' },
  
  // Professionals - Science and Engineering (21xx)
  { code: '2111', title: 'Physicists and Astronomers', category: 'Science & Engineering' },
  { code: '2112', title: 'Meteorologists', category: 'Science & Engineering' },
  { code: '2113', title: 'Chemists', category: 'Science & Engineering' },
  { code: '2114', title: 'Geologists and Geophysicists', category: 'Science & Engineering' },
  { code: '2120', title: 'Mathematicians, Actuaries and Statisticians', category: 'Science & Engineering' },
  { code: '2131', title: 'Biologists, Botanists, Zoologists', category: 'Science & Engineering' },
  { code: '2132', title: 'Farming, Forestry and Fisheries Advisers', category: 'Science & Engineering' },
  { code: '2133', title: 'Environmental Protection Professionals', category: 'Science & Engineering' },
  
  // Engineers (214x-215x)
  { code: '2141', title: 'Industrial and Production Engineers', category: 'Engineering' },
  { code: '2142', title: 'Civil Engineers', category: 'Engineering' },
  { code: '2143', title: 'Environmental Engineers', category: 'Engineering' },
  { code: '2144', title: 'Mechanical Engineers', category: 'Engineering' },
  { code: '2145', title: 'Chemical Engineers', category: 'Engineering' },
  { code: '2146', title: 'Mining Engineers, Metallurgists', category: 'Engineering' },
  { code: '2149', title: 'Engineering Professionals Not Elsewhere Classified', category: 'Engineering' },
  { code: '2151', title: 'Electrical Engineers', category: 'Engineering' },
  { code: '2152', title: 'Electronics Engineers', category: 'Engineering' },
  { code: '2153', title: 'Telecommunications Engineers', category: 'Engineering' },
  
  // Architects, Planners, Designers (216x)
  { code: '2161', title: 'Building Architects', category: 'Architecture & Design' },
  { code: '2162', title: 'Landscape Architects', category: 'Architecture & Design' },
  { code: '2163', title: 'Product and Garment Designers', category: 'Architecture & Design' },
  { code: '2164', title: 'Town and Traffic Planners', category: 'Architecture & Design' },
  { code: '2165', title: 'Cartographers and Surveyors', category: 'Architecture & Design' },
  { code: '2166', title: 'Graphic and Multimedia Designers', category: 'Architecture & Design' },
  
  // Health Professionals (22xx)
  { code: '2211', title: 'Generalist Medical Practitioners', category: 'Healthcare' },
  { code: '2212', title: 'Specialist Medical Practitioners', category: 'Healthcare' },
  { code: '2221', title: 'Nursing Professionals', category: 'Healthcare' },
  { code: '2222', title: 'Midwifery Professionals', category: 'Healthcare' },
  { code: '2230', title: 'Traditional and Complementary Medicine Professionals', category: 'Healthcare' },
  { code: '2240', title: 'Paramedical Practitioners', category: 'Healthcare' },
  { code: '2250', title: 'Veterinarians', category: 'Healthcare' },
  { code: '2261', title: 'Dentists', category: 'Healthcare' },
  { code: '2262', title: 'Pharmacists', category: 'Healthcare' },
  { code: '2263', title: 'Environmental and Occupational Health Professionals', category: 'Healthcare' },
  { code: '2264', title: 'Physiotherapists', category: 'Healthcare' },
  { code: '2265', title: 'Dieticians and Nutritionists', category: 'Healthcare' },
  { code: '2266', title: 'Audiologists and Speech Therapists', category: 'Healthcare' },
  { code: '2267', title: 'Optometrists and Ophthalmic Opticians', category: 'Healthcare' },
  { code: '2269', title: 'Health Professionals Not Elsewhere Classified', category: 'Healthcare' },
  
  // Teaching Professionals (23xx)
  { code: '2310', title: 'University and Higher Education Teachers', category: 'Education' },
  { code: '2320', title: 'Vocational Education Teachers', category: 'Education' },
  { code: '2330', title: 'Secondary Education Teachers', category: 'Education' },
  { code: '2341', title: 'Primary School Teachers', category: 'Education' },
  { code: '2342', title: 'Early Childhood Educators', category: 'Education' },
  { code: '2351', title: 'Education Methods Specialists', category: 'Education' },
  { code: '2352', title: 'Special Needs Teachers', category: 'Education' },
  { code: '2353', title: 'Other Language Teachers', category: 'Education' },
  { code: '2354', title: 'Other Music Teachers', category: 'Education' },
  { code: '2355', title: 'Other Arts Teachers', category: 'Education' },
  { code: '2356', title: 'Information Technology Trainers', category: 'Education' },
  
  // Business and Administration Professionals (24xx)
  { code: '2411', title: 'Accountants', category: 'Business & Finance' },
  { code: '2412', title: 'Financial and Investment Advisers', category: 'Business & Finance' },
  { code: '2413', title: 'Financial Analysts', category: 'Business & Finance' },
  { code: '2421', title: 'Management and Organization Analysts', category: 'Business & Finance' },
  { code: '2422', title: 'Policy Administration Professionals', category: 'Business & Finance' },
  { code: '2423', title: 'Personnel and Careers Professionals', category: 'Business & Finance' },
  { code: '2424', title: 'Training and Staff Development Professionals', category: 'Business & Finance' },
  { code: '2431', title: 'Advertising and Marketing Professionals', category: 'Business & Finance' },
  { code: '2432', title: 'Public Relations Professionals', category: 'Business & Finance' },
  { code: '2433', title: 'Technical and Medical Sales Professionals', category: 'Business & Finance' },
  
  // ICT Professionals (25xx) - MOST COMMON FOR EU IMMIGRATION
  { code: '2511', title: 'Systems Analysts', category: 'Information Technology' },
  { code: '2512', title: 'Software Developers', category: 'Information Technology' },
  { code: '2513', title: 'Web and Multimedia Developers', category: 'Information Technology' },
  { code: '2514', title: 'Applications Programmers', category: 'Information Technology' },
  { code: '2519', title: 'Software and Applications Developers Not Elsewhere Classified', category: 'Information Technology' },
  { code: '2521', title: 'Database Designers and Administrators', category: 'Information Technology' },
  { code: '2522', title: 'Systems Administrators', category: 'Information Technology' },
  { code: '2523', title: 'Computer Network Professionals', category: 'Information Technology' },
  { code: '2529', title: 'Database and Network Professionals Not Elsewhere Classified', category: 'Information Technology' },
  
  // Legal, Social and Cultural Professionals (26xx)
  { code: '2611', title: 'Lawyers', category: 'Legal & Social' },
  { code: '2612', title: 'Judges', category: 'Legal & Social' },
  { code: '2619', title: 'Legal Professionals Not Elsewhere Classified', category: 'Legal & Social' },
  { code: '2621', title: 'Archivists and Curators', category: 'Legal & Social' },
  { code: '2622', title: 'Librarians and Related Information Professionals', category: 'Legal & Social' },
  { code: '2631', title: 'Economists', category: 'Legal & Social' },
  { code: '2632', title: 'Sociologists, Anthropologists', category: 'Legal & Social' },
  { code: '2633', title: 'Philosophers, Historians and Political Scientists', category: 'Legal & Social' },
  { code: '2634', title: 'Psychologists', category: 'Legal & Social' },
  { code: '2635', title: 'Social Work and Counselling Professionals', category: 'Legal & Social' },
  { code: '2636', title: 'Religious Professionals', category: 'Legal & Social' },
  { code: '2641', title: 'Authors and Related Writers', category: 'Legal & Social' },
  { code: '2642', title: 'Journalists', category: 'Legal & Social' },
  { code: '2643', title: 'Translators, Interpreters and Other Linguists', category: 'Legal & Social' },
  { code: '2651', title: 'Visual Artists', category: 'Legal & Social' },
  { code: '2652', title: 'Musicians, Singers and Composers', category: 'Legal & Social' },
  { code: '2653', title: 'Dancers and Choreographers', category: 'Legal & Social' },
  { code: '2654', title: 'Film, Stage and Related Directors and Producers', category: 'Legal & Social' },
  { code: '2655', title: 'Actors', category: 'Legal & Social' },
  { code: '2656', title: 'Announcers on Radio, Television and Other Media', category: 'Legal & Social' },
  
  // Technicians and Associate Professionals (3xxx)
  { code: '3111', title: 'Chemical and Physical Science Technicians', category: 'Technicians' },
  { code: '3112', title: 'Civil Engineering Technicians', category: 'Technicians' },
  { code: '3113', title: 'Electrical Engineering Technicians', category: 'Technicians' },
  { code: '3114', title: 'Electronics Engineering Technicians', category: 'Technicians' },
  { code: '3115', title: 'Mechanical Engineering Technicians', category: 'Technicians' },
  { code: '3116', title: 'Chemical Engineering Technicians', category: 'Technicians' },
  { code: '3117', title: 'Mining and Metallurgical Technicians', category: 'Technicians' },
  { code: '3118', title: 'Draughtspersons', category: 'Technicians' },
  { code: '3119', title: 'Physical and Engineering Science Technicians Not Elsewhere Classified', category: 'Technicians' },
  
  // ICT Technicians (35xx)
  { code: '3511', title: 'Information and Communications Technology Operations Technicians', category: 'ICT Technicians' },
  { code: '3512', title: 'Information and Communications Technology User Support Technicians', category: 'ICT Technicians' },
  { code: '3513', title: 'Computer Network and Systems Technicians', category: 'ICT Technicians' },
  { code: '3514', title: 'Web Technicians', category: 'ICT Technicians' },
  
  // Business and Administration Associate Professionals (33xx)
  { code: '3311', title: 'Securities and Finance Dealers and Brokers', category: 'Business Associates' },
  { code: '3312', title: 'Credit and Loans Officers', category: 'Business Associates' },
  { code: '3313', title: 'Accounting Associate Professionals', category: 'Business Associates' },
  { code: '3314', title: 'Statistical, Mathematical and Related Associate Professionals', category: 'Business Associates' },
  { code: '3315', title: 'Valuers and Loss Assessors', category: 'Business Associates' },
  { code: '3321', title: 'Insurance Representatives', category: 'Business Associates' },
  { code: '3322', title: 'Commercial Sales Representatives', category: 'Business Associates' },
  { code: '3323', title: 'Buyers', category: 'Business Associates' },
  { code: '3324', title: 'Trade Brokers', category: 'Business Associates' },
  { code: '3331', title: 'Clearing and Forwarding Agents', category: 'Business Associates' },
  { code: '3332', title: 'Conference and Event Planners', category: 'Business Associates' },
  { code: '3333', title: 'Employment Agents and Contractors', category: 'Business Associates' },
  { code: '3334', title: 'Real Estate Agents and Property Managers', category: 'Business Associates' },
  { code: '3339', title: 'Business Services Agents Not Elsewhere Classified', category: 'Business Associates' },
  { code: '3341', title: 'Office Supervisors', category: 'Business Associates' },
  { code: '3342', title: 'Legal Secretaries', category: 'Business Associates' },
  { code: '3343', title: 'Administrative and Executive Secretaries', category: 'Business Associates' },
  { code: '3344', title: 'Medical Secretaries', category: 'Business Associates' },
  
  // Service and Sales Workers (5xxx)
  { code: '5120', title: 'Cooks', category: 'Service Workers' },
  { code: '5131', title: 'Waiters', category: 'Service Workers' },
  { code: '5132', title: 'Bartenders', category: 'Service Workers' },
  { code: '5151', title: 'Cleaning and Housekeeping Supervisors', category: 'Service Workers' },
  { code: '5152', title: 'Domestic Housekeepers', category: 'Service Workers' },
  { code: '5153', title: 'Building Caretakers', category: 'Service Workers' },
  
  // Skilled Agricultural, Forestry and Fishery Workers (6xxx)
  { code: '6111', title: 'Field Crop and Vegetable Growers', category: 'Agriculture' },
  { code: '6112', title: 'Tree and Shrub Crop Growers', category: 'Agriculture' },
  { code: '6113', title: 'Gardeners, Horticultural and Nursery Growers', category: 'Agriculture' },
  { code: '6114', title: 'Mixed Crop Growers', category: 'Agriculture' },
  
  // Craft and Related Trades Workers (7xxx)
  { code: '7111', title: 'House Builders', category: 'Trades' },
  { code: '7112', title: 'Bricklayers and Related Workers', category: 'Trades' },
  { code: '7113', title: 'Stonemasons, Stone Cutters, Splitters and Carvers', category: 'Trades' },
  { code: '7114', title: 'Concrete Placers, Concrete Finishers and Related Workers', category: 'Trades' },
  { code: '7115', title: 'Carpenters and Joiners', category: 'Trades' },
  { code: '7119', title: 'Building Frame and Related Trades Workers Not Elsewhere Classified', category: 'Trades' },
  { code: '7121', title: 'Roofers', category: 'Trades' },
  { code: '7122', title: 'Floor Layers and Tile Setters', category: 'Trades' },
  { code: '7123', title: 'Plasterers', category: 'Trades' },
  { code: '7124', title: 'Insulation Workers', category: 'Trades' },
  { code: '7125', title: 'Glaziers', category: 'Trades' },
  { code: '7126', title: 'Plumbers and Pipe Fitters', category: 'Trades' },
  { code: '7127', title: 'Air Conditioning and Refrigeration Mechanics', category: 'Trades' },
  
  // Plant and Machine Operators (8xxx)
  { code: '8111', title: 'Miners and Quarriers', category: 'Operators' },
  { code: '8112', title: 'Mineral and Stone Processing Plant Operators', category: 'Operators' },
  { code: '8113', title: 'Well Drillers and Borers and Related Workers', category: 'Operators' },
  { code: '8114', title: 'Cement, Stone and Other Mineral Products Machine Operators', category: 'Operators' },
  
  // Elementary Occupations (9xxx)
  { code: '9111', title: 'Domestic Cleaners and Helpers', category: 'Elementary' },
  { code: '9112', title: 'Cleaners and Helpers in Offices, Hotels and Other Establishments', category: 'Elementary' },
  { code: '9121', title: 'Hand Launderers and Pressers', category: 'Elementary' },
  { code: '9122', title: 'Vehicle Cleaners', category: 'Elementary' },
  { code: '9123', title: 'Window Cleaners', category: 'Elementary' },
  { code: '9129', title: 'Other Cleaning Workers', category: 'Elementary' },
];

// Format options for Combobox component
export const OCCUPATION_CODE_OPTIONS = ISCO_08_CODES.map(occ => ({
  value: occ.code,
  label: `${occ.code} - ${occ.title}`,
  category: occ.category
}));

// Helper function to find occupation title by code
export function getOccupationTitle(code: string): string | undefined {
  const occupation = ISCO_08_CODES.find(occ => occ.code === code);
  return occupation?.title;
}

// Helper function to search occupations by keyword
export function searchOccupations(keyword: string): OccupationCode[] {
  const lowerKeyword = keyword.toLowerCase();
  return ISCO_08_CODES.filter(occ => 
    occ.title.toLowerCase().includes(lowerKeyword) ||
    occ.code.includes(keyword) ||
    occ.category.toLowerCase().includes(lowerKeyword)
  );
}

