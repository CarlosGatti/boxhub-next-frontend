import { Container, WrapperPost, WrapperSinglePost } from '../../styles/feed'

import { Header } from '../../components/_ui/Header'
import { MainLayout } from '../../layouts/MainLayout'
import { NextPage } from 'next'

const Post: NextPage = () => {
  return (
    <MainLayout
      headTitle="BoxHub | Post"
      metaName="description"
      metaContent="post"
    >
      <Header />
      <Container>
        <WrapperSinglePost>
          <WrapperPost>
            {/* {isLogged ? (
            <Publication
              publication={post?.post[0]}
              key={post?.post[0].id_post}
            />
          ) : (
            <PostPrivate />
          )} */}
          </WrapperPost>
          {/*  <PostPrivate /> */}
        </WrapperSinglePost>
      </Container>
    </MainLayout>
  )
}
export default Post
