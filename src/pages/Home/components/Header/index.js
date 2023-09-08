/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Header({
  hasError,
  qtyOfContacts,
  qtyOfFilteredContacts,
}) {
  const alignment = hasError
    ? 'flex-end'
    : qtyOfContacts
      ? 'space-between'
      : 'center';
  return (
    <Container justifyContent={alignment} hasError={hasError}>

      {!!(!hasError && qtyOfContacts) && (
        <strong>
          {qtyOfFilteredContacts}
          {' '}
          {qtyOfFilteredContacts === 1 ? 'contato' : 'contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  qtyOfContacts: PropTypes.number.isRequired,
  qtyOfFilteredContacts: PropTypes.number.isRequired,
};
