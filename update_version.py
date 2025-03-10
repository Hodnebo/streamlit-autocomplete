"""
Script to update the version number in pyproject.toml
Usage: python update_version.py [version]
"""

import sys

import toml


def update_version(version: str) -> None:
    """
    Update the version number in pyproject.toml to the provided version.

    :param version: The new version number.
    """
    version = version.lstrip("v")

    with open("pyproject.toml", "r") as f:
        pyproject = toml.load(f)

    # Update the version - this project uses the top-level "project" section
    if "project" in pyproject:
        original_version = pyproject["project"].get("version", "unknown")
        pyproject["project"]["version"] = version
        print(
            f"Updated version in [project] section from {original_version} to {version}"
        )
    else:
        print("Error: Could not find [project] section in pyproject.toml")
        sys.exit(1)

    # Write the updated pyproject.toml
    # Note: toml.dump() may change formatting (e.g., array representation, whitespace)
    # but the semantic content will remain the same
    with open("pyproject.toml", "w") as f:
        toml.dump(pyproject, f)

    print(f"Version in pyproject.toml successfully updated to {version}")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(
            "Error: No version number provided. Usage: python update_version.py [version]"
        )
        sys.exit(1)

    new_version = sys.argv[1]
    update_version(new_version)
