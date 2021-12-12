import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments.js';
import HighlightedQuote from '../components/quotes//HighlightedQuote';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  { id: 'q2', author: 'Aylin', text: 'Learning React is great!' },
];

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  };
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author}></HighlightedQuote>
      <Route path={match.path} exact>
        <div className="centered">
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;