// src/components/DynamicForm/index.jsx
import styles from './DynamicForm.module.css';
import { useForm } from 'react-hook-form';

function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const firstFieldValue = watch('firstField');

  const onSubmit = (data) => {
    console.log('Данные отправлены: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="firstField">First Field</label>
      <input
        id="firstField"
        type="text"
        {...register('firstField', {
          required: 'First Field is required',
          minLength: {
            value: 5,
            message: 'Minimum 5 characters',
          },
        })}
      />

      {errors.firstField && <p>{errors.firstField.message}</p>}

      {firstFieldValue?.length >= 5 && (
        <>
          <label htmlFor="secondField">Second Field</label>
          <input id="secondField" type="text" {...register('secondField')} />
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
