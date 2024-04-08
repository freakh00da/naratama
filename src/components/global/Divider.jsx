import PropTypes from 'prop-types';

const Divider = ({ title }) => {
  return (
    <span className='relative flex justify-center'>
      <div className='absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75'></div>

      <span className='relative z-10 bg-white px-6'>{title}</span>
    </span>
  );
};

Divider.propTypes = {
  title: PropTypes.string,
};

export default Divider;
