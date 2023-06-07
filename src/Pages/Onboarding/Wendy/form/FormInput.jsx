import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function FormInput({ label, name, ...rest }) {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();
  const error = Array.isArray(errors[name])
    ? // @ts-ignore
      errors[name].join(", ")
    : errors[name]?.message || errors[name];

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel>{label}</FormLabel>
      <Input isDisabled={isSubmitting} {...register(name)} {...rest} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}
