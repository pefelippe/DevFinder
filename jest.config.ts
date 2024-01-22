import { pathsToModuleNameMapper, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@api/*": ["src/api/*"],
      "@components/*": ["src/components/*"],
      "@context/*": ["src/context/*"],
      "@hooks/*": ["src/hooks/*"],
      "@pages/*": ["src/pages/*"],
    },
    {
      prefix: "<rootDir>/",
    }
  ),
};

export default jestConfig;
