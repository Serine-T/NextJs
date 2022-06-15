import Router from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";
import styles from '../../styles/about.module.scss';

export default function About({title}) {
  const linkClickHandler = () =>{
    Router.push('./');
  }
  return (
    <MainLayout>
      <Head>
        <meta name="keywords" content="next, javascript, react" />
        <meta name="description" content="description" />
        <meta charSet="utf-8" />
      </Head>
      <div className={styles.about_container}>
        aw
      </div>
      <h1>About {title}</h1>
      <button onClick={linkClickHandler}>Go back to Home Page</button>
      <button onClick={() => Router.push('./posts')}>Go back Post Page</button>
    </MainLayout>
  )
}
About.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/about")
  const data = await response.json();

  return {
    title :data.title
  }
}