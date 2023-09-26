import { ProgressBar } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <ProgressBar
        height="200"
        width="200"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="darkcyan"
        barColor="lightskyblue"
      />
    </div>
  );
};

export default Loader;
