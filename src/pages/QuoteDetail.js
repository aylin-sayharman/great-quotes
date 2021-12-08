import { useParams, Route } from 'react';
import { Fragment } from 'react';
import Comments from '../components/comments/Comments.js';

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote detail</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;