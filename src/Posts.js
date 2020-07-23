import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Post from "./Post";

const Posts = () => (
  <Query
    query={gql`
      {
        recentPosts(count: 10, offset: 0) {
          id
          title
          category
          author {
            id
            name
            thumbnail
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      //   return data.recentPosts.map(({ id, title, category, author }) => (
      //     <div key={id}>
      //       <p>{`${title} by ${author.name}`}</p>
      //     </div>
      //   ));
      return data.recentPosts.map((post) => <Post post={post} />);
    }}
  </Query>
);
export default Posts;
