import Link from 'umi/link';

export default () =>
  <div>
    <h1>Routes</h1>
    <ul>
      <li><Link to="/users/123">/users/123</Link></li>
      <li><Link to="/users">/users</Link></li>
      <li><Link to="/users/posts/123/comments">/users/posts/123/comments</Link></li>
      <li><Link to="/404">/404</Link></li>
    </ul>
  </div>
