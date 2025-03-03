module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/github', {
      draftRelease: false,
      releasedLabels: false,
      successComment: "This release is available as ${nextRelease.version}",
      failTitle: "The automated release failed",
      failComment: "The automated release failed. Please check the workflow run for details."
    }],
    [
      "@semantic-release/exec", {
          "prepareCmd": "python update_version.py ${nextRelease.version}",
          "successCmd": "echo \"version=${nextRelease.version}\" >> $GITHUB_OUTPUT && echo \"${nextRelease.version}\" > version.txt"
      }
    ],
    [
      '@semantic-release/git', {
        assets: [
          'pyproject.toml', 
          'CHANGELOG.md',
          'st_autocomplete/frontend/build/**',
          'st_autocomplete/**/*.py'
        ],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};
