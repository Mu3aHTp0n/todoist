import { Link } from 'react-router-dom';

export default function Page401() {
  return (
    <div style={{ placeItems: 'center' }}>
      <h1 style={{ color: 'aliceblue' }}>401</h1>
      <h2 style={{ color: 'aliceblue' }}>
        Нет доступа, пожалуйста <Link to={'/'}>авторизуйтесь</Link>
      </h2>
    </div>
  );
}
