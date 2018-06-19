
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Header, Card, Dropdown, Divider, Button } from 'semantic-ui-react';
import PostForm from './PostForm'

class Posts extends React.Component {
  state = { name: '', showForm: false }

  toggleForm = () => {
    this.setState(state => {
      return { showForm: !state.showForm }
    })
  }

  posts = () => {
    const { posts } = this.props;
    const { name } = this.state;
    let visible = posts;
    if (name)
      visible = posts.filter(p => p.name === name)

    return visible.map(post =>
      <Card key={post.id}>
        <Card.Content>
          <Card.Header>
            {post.name}
          </Card.Header>
          <Card.Meta>
            <span>
              {post.content}
            </span>
          </Card.Meta>
          <Card.Description>
            {post.name}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/posts/${post.id}`}>
            View Post
        </Link>
        </Card.Content>
      </Card>
    )
  }

  nameOptions = () => {
    return this.props.names.map((c, i) => { return { key: i, text: c, value: c } })
  }

  render() {
    let { name, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Posts</Header>
        <Button onClick={this.toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
        </Button>
        {showForm ?
          <PostForm closeForm={this.toggleForm} />
          :
          <div>
            <Dropdown
              placeholder="Filter by name"
              fluid
              selection
              options={this.nameOptions()}
              onChange={(e, data) => this.setState({ name: data.value })}
              value={name}
            />
            {name && <Button fluid basic onClick={() => this.setState({ name: '' })}>Clear Filter: {name}</Button>}
            <Divider />
            <Card.Group itemsPerRow={4}>
              {this.posts}
            </Card.Group>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { posts } = state
  const names = [...new Set(posts.map(p => p.category))]
  return { posts, names }
}

export default connect(mapStateToProps)(Posts)