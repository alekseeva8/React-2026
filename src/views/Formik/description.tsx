import { useField } from "formik";

export const Description = (props: { label: string; name: string; type: string }) => {
  const [field] = useField(props);
  return (
    <div>
      <p>
        {props.label}: {field.value}
      </p>
    </div>
  );
};
