import styles from './ProductsFilter.module.css';
import { useForm } from 'react-hook-form';

export default function ProductsFilter( {applyFilters} ) {

  const { register, handleSubmit, formState: { errors }} = useForm();

  const composeError = () => {
    for (const [key, val] of Object.entries(errors)) {
      return <p className={styles.productsFilterFromError}>{key + ':' + val.message}</p>
    }
  }

  const validateAmounts = (value, formState) => {
    if (formState.amountFrom && formState.amountTo) {
      try {
        const n1 = Number.parseFloat(formState.amountFrom);
        const n2 = Number.parseFloat(formState.amountTo);
        if (n1 > n2) return 'Incorrect amounts!';
      }
      catch (err) {
        return 'Incorrect amounts format!'
      }
    }
    return true;
  }

  return (
    <form
      onSubmit={handleSubmit( (formState) => { applyFilters(formState) } )}
      className={styles.productsFilterForm}
    >
      <input
        placeholder='Amount from'
        { ...register('amountFrom', { pattern: { value: /^\d+(\.\d{1,2})?$/, message: 'Should be a number!'}})}
      />
      <input
        placeholder='Amount to'
        { ...register(
          'amountTo',
          {
            pattern: {
              value: /^\d+(\.\d{1,2})?$/,
              message: 'Should be a number!'
            },
            validate: validateAmounts
          }
        )}
      />
      <input
        type="text"
        placeholder='Product name'
        { ...register('productName') }
      />
      <button type='submit'>Apply filters</button>

      {composeError()}
    </form>
  )
}