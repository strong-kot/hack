import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
});

export default schema;
