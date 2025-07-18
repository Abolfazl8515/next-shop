import { useCallback } from "react";

const yupResolverFunction = (validationSchema) => async (data) => {
  try {
    const values = await validationSchema.validate(data, {
      abortEarly: false,
    });

    return {
      values,
      errors: {},
    };
  } catch (errors) {
    return {
      values: {},
      errors: errors.inner.reduce(
        (allErrors, currentError) => ({
          ...allErrors,
          [currentError.path]: {
            type: currentError.type ?? "validation",
            message: currentError.message,
          },
        }),
        {}
      ),
    };
  }
};

export const useYupValidationResolver = (schema) =>
  useCallback(yupResolverFunction(schema), [schema]);
