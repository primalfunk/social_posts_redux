import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PostView = ({ post = {} }) => (
  <Container>
    <Link to="/posts">View All Posts</Link>
    <Header as="h3" textAlign="center">{post.name}</Header>
    <Image src={post.logo} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>{post.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Content</Table.Cell>
          <Table.Cell>{post.content}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    <Link to="/posts">Edit Post</Link>{' | '}
    <Link to="/posts">Delete Post</Link>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { post: state.posts.find(p => p.id === parseInt(props.match.params.id)) }
}

export default connect(mapStateToProps)(PostView);