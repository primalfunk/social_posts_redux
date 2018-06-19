import React from 'react';
import { connect } from 'react-redux'
import { updatePost, addPost } from '../actions/posts'
import { Form } from 'semantic-ui-react';

class PostForm extends React.Component {
  initialState = {
    name: '',
    content: '',
  }

  state = { ...this.initialState }

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const post = { ...this.state }
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updatePost : addPost
    dispatch(func(post))
    closeForm()
  }

  render() {
    const { name, content } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="content"
          defaultValue={content}
          onChange={this.handleChange}
          label="Content"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(PostForm);