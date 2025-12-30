#!/usr/bin/env python3
"""
Remove reactFlowData blocks from TypeScript flowchart files.
"""
import re
import sys
from pathlib import Path

def remove_reactflow_data(content: str) -> str:
    """
    Remove reactFlowData blocks from TypeScript content.

    Strategy:
    1. Find 'reactFlowData: {'
    2. Track brace depth to find matching closing brace
    3. Remove entire block including the trailing comma and closing brace
    """
    lines = content.split('\n')
    result_lines = []
    i = 0

    while i < len(lines):
        line = lines[i]

        # Check if this line contains reactFlowData
        if 'reactFlowData:' in line:
            print(f"    Found reactFlowData at line {i+1}")
            # Find the opening brace
            brace_depth = 0

            # Count braces on the current line
            for char in line:
                if char == '{':
                    brace_depth += 1
                elif char == '}':
                    brace_depth -= 1

            # Skip lines until we close the reactFlowData block
            i += 1
            while i < len(lines) and brace_depth > 0:
                for char in lines[i]:
                    if char == '{':
                        brace_depth += 1
                    elif char == '}':
                        brace_depth -= 1

                # If we've closed all braces, we're done
                if brace_depth == 0:
                    break
                i += 1

            # Skip past the closing line
            i += 1
            print(f"    Removed block ending at line {i}")
            continue
        else:
            result_lines.append(line)
            i += 1

    return '\n'.join(result_lines)

def process_file(filepath: Path) -> bool:
    """Process a single file and return True if changes were made."""
    try:
        content = filepath.read_text(encoding='utf-8')
        
        # Check if file contains reactFlowData
        if 'reactFlowData' not in content:
            print(f"  ⏭️  {filepath.name}: No reactFlowData found")
            return False
        
        # Count occurrences before
        count_before = content.count('reactFlowData:')
        
        # Remove reactFlowData blocks
        new_content = remove_reactflow_data(content)
        
        # Count occurrences after
        count_after = new_content.count('reactFlowData:')
        
        if count_after == 0:
            # Write back
            filepath.write_text(new_content, encoding='utf-8')
            print(f"  ✅ {filepath.name}: Removed {count_before} reactFlowData block(s)")
            return True
        else:
            print(f"  ⚠️  {filepath.name}: Still has {count_after} reactFlowData block(s) remaining")
            return False
            
    except Exception as e:
        print(f"  ❌ {filepath.name}: Error - {e}")
        return False

def main():
    flowcharts_dir = Path('src/data/flowcharts')
    
    if not flowcharts_dir.exists():
        print(f"Error: Directory {flowcharts_dir} not found")
        sys.exit(1)
    
    print(f"Processing TypeScript files in {flowcharts_dir}...\n")
    
    # Find all .ts files (excluding .test.ts and index.ts)
    ts_files = [
        f for f in flowcharts_dir.glob('*.ts')
        if not f.name.endswith('.test.ts') and f.name != 'index.ts'
    ]
    
    if not ts_files:
        print("No TypeScript files found")
        sys.exit(0)
    
    modified_count = 0
    for filepath in sorted(ts_files):
        if process_file(filepath):
            modified_count += 1
    
    print(f"\n✨ Done! Modified {modified_count} file(s)")

if __name__ == '__main__':
    main()

