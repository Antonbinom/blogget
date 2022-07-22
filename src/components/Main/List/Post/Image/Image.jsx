import style from './Image.module.css';
import PropTypes from 'prop-types';
import notphoto from '../img/notphoto.jpg';

export const Image = ({alt}) => (
	<img className={style.img} src={notphoto} alt={alt} />
);

Image.propTypes = {
	alt: PropTypes.string,
};
