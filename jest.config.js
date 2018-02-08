module.exports = {
    verbose: true,
    "roots": ["src/js"],
    "transform": {".*": "<rootDir>/node_modules/babel-jest"},
    "moduleFileExtensions": ["js"],
    "collectCoverage": true,
    "collectCoverageFrom": [
        "src/js/**/*.js",
        "!node_modules/**",
        "!src/test/**"
    ],
    "coverageThreshold": {
        "global": {
            "branches": 80,
            "functions": 80,
            "lines": 80,
            "statements": -10
        }
    }
};
