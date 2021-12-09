import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (data) => {
    console.log(data)
  };
  return <QuoteForm onAddQuote={addQuoteHandler}></QuoteForm>
};

export default NewQuote;