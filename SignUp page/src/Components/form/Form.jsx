import React from 'react';
import styles from './Form.module.css';
import image from '../../assets/Formimage.jpg';

const Form = () => {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h3 className={styles.header}>Sign up</h3>
        <h5 className={styles.subtitle}>
          Already have an account? <a href="#">Login here</a>
        </h5>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.formWrapper}>
          <label className={styles.inputLabel}>Name</label>
          <input
            className={styles.inputField}
            type="text"
            placeholder="Enter your name here"
          />
          <br />
          <label className={styles.inputLabel}>Email ID</label>
          <input
            className={styles.inputField}
            type="email"
            placeholder="Enter user email ID here"
          />
          <br />
          <label className={styles.inputLabel}>Password</label>
          <input
            className={styles.inputField}
            type="password"
            placeholder="Enter password here"
          />
          <input className={styles.checkbox} type="checkbox" />
          <label className={styles.termsLabel}>By signing up, you agree to receive updates and special offers.</label>
          <button className={styles.submitButton}>Submit</button>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={image} alt="Sign up visual" />
        </div>
      </div>
    </div>
  );
};

export default Form;
