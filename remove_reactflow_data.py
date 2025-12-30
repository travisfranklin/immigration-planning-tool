#!/usr/bin/env python3
import re
import glob

def remove_reactflow_data(filepath):
    """Remove all reactFlowData blocks from a TypeScript file."""
    with open(filepath, 'r') as f:
        lines = f.readlines()

    # Check if file contains reactFlowData
    if not any('reactFlowData:' in line for line in lines):
        return False

    print(f"Processing: {filepath}")

    modified_lines = []
    i = 0
    count = 0

    while i < len(lines):
        line = lines[i]

        # Check if this line contains "reactFlowData:"
        if 'reactFlowData:' in line:
            count += 1
            # Skip this line and all lines until we find "    },\n    steps: ["
            # We need to find the closing brace of reactFlowData
            i += 1
            depth = 0
            found_opening = False

            while i < len(lines):
                current = lines[i]

                # Count braces to track nesting
                if '{' in current:
                    depth += current.count('{')
                    found_opening = True
                if '}' in current:
                    depth -= current.count('}')

                # Check if we've found the end of reactFlowData block
                if found_opening and depth == 0 and '}' in current:
                    # Skip this closing brace line
                    i += 1
                    # The next line should be "    steps: ["
                    if i < len(lines) and 'steps:' in lines[i]:
                        # Don't skip the steps line, we want to keep it
                        break
                    break

                i += 1
        else:
            modified_lines.append(line)
            i += 1

    if count > 0:
        with open(filepath, 'w') as f:
            f.writelines(modified_lines)
        print(f"  ✓ Removed {count} reactFlowData block(s)")
        return True

    return False

def main():
    flowchart_dir = "src/data/flowcharts"
    files = glob.glob(f"{flowchart_dir}/*.ts")

    total_modified = 0
    for filepath in sorted(files):
        # Skip test files and index
        if filepath.endswith('.test.ts') or filepath.endswith('/index.ts'):
            continue

        if remove_reactflow_data(filepath):
            total_modified += 1

    print(f"\n✅ Done! Modified {total_modified} file(s)")

if __name__ == '__main__':
    main()

