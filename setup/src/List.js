import React from 'react';
import { Fragment } from 'react';

const List = (props) => {
  const people = props.people
  return (
    <Fragment>
      <ul>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <article key={id} className="person">
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{age}Years</p>
            </article>
          )
        })}
      </ul>
    </Fragment >
  );
};

export default List;
