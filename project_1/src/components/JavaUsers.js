import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import { deleteUser } from "./actions";

function JavaUsers(props) {
  const javaDevelopers = props.users.filter(user => user.job === "Java developer");

  return (
    <div>
      {javaDevelopers.length > 0 ? (
        javaDevelopers.map((el) => (
          <div key={el.id}>
            <User
              onDelete={props.onDelete}
              user={el}
            />
          </div>
        ))
      ) : (
        <div className="user" style={{
          backgroundColor: "rgba(238, 238, 238, 0.945)",
          borderRadius: "5%",
          padding: "40px",
          margin: "40px 13%"
        }}>
          <h3 style={{
            fontSize: "26px", 
            color: "black", 
            textAlign: "center" }}>Нет пользователей с должностью Java developer</h3>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(deleteUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JavaUsers);