import s from './MainPage.module.scss';
//TODO
// import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { Component } from 'react';

//TODO

// import MainPageContainer from './MainPageContainer';
import { connect } from 'react-redux';
import actions from '../../redux/questions/questions-actions';

class Radio extends Component {
  state = {
    id: '',
    value: '',
  };

  onRadiochange = event => {
    event.preventDefault();

    const res = [];
    [].forEach.call(event.target.elements, function (ele) {
      if (ele.checked) {
        const { value, id } = ele;
        return res.push({ value, id });
      }
    });

    this.props.onSubmit(res[0].id, res[0].value);
    this.setState({
      id: '',
      value: '',
    });
  };

  render() {
    const { id, value } = this.state;
    return (
      <>
        <form className={s.test} onSubmit={this.onRadiochange}>
          <input type="radio" id={id} value={value} name="test" />
          <label htmlFor="test1">test1</label>
          <input type="radio" id="id-test2" value="val-test2" name="test" />
          <label htmlFor="test2">test2</label>
          <input type="radio" id="test3" value="test3" name="test" />
          <label htmlFor="test3">test3</label>
          <input type="radio" id="test4" value="test4" name="test" />
          <label htmlFor="test3">test4</label>
          <input type="radio" id="test5" value="test5" name="test" />
          <label htmlFor="test5">test5</label>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div></div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: (id, value) => dispatch(actions.addResult(id, value)),
});

export default connect(null, mapDispatchToProps)(Radio);
