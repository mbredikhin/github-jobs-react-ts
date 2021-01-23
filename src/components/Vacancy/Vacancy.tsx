import React from 'react';
import { RouteComponentProps, useHistory, useLocation, withRouter } from 'react-router-dom';
import styles from './Vacancy.module.css';
import { Vacancy } from '../../types';

interface LocationState extends Vacancy {
  from: { pathname: string };
}

const VacancyComponent: React.FC<RouteComponentProps> = () => {
  const { state } = useLocation<LocationState>();
  const history = useHistory();

  return (
    <div className={styles.container}>
      <h1 className={styles['app-title']}>
        Github <span className={styles['app-title_regular']}>Jobs</span>
      </h1>
      <main className={styles['vacancy-main']}></main>
      <div className={styles['column column--small']}>
        <button
          className={styles.button}
          onClick={() => {
            history.goBack();
          }}
        >
          ← Back to search
        </button>
      </div>
      <div>
        <h3>How to apply</h3>
        <div>{state.how_to_apply}</div>
      </div>
      <div className={styles['column']}>
        <h2 className={styles['title']}>{state.title}</h2>
        <span className={styles['card__badge']}>{state.type}</span>
        <div className={styles['card__extra card__extra--created']}>
          <img className={styles['card__icon']} src={require('../../assets/clock.svg')} alt="Created at" />
          <span className={styles['card__extra-text']}>{state.created_at}</span>
        </div>
      </div>
      <div>
        <div className={styles.image}>
          <img className={styles['card__image']} src={state.company_logo} alt={state.company} />
        </div>
        <div>
          <span className={styles['card__company']}>{state.company}</span>
          <div className={styles['card__extra card__extra--location']}>
            <img className={styles['card__icon']} src={require('../../assets/world.svg')} alt="Location" />
            <span className={styles['card__extra-text']}>{state.location}</span>
          </div>
        </div>
        <div className={styles.description}>{state.description}</div>
      </div>
    </div>
  );
};

export default withRouter(VacancyComponent);
