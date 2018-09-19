import App from '../Views/Layout/App'
import Home from '../Views/Home/'
import About from '../Views/About/'
import Blog from '../Views/Blog/'
import Resume from '../Views/Resume/'
import ArticleDetail from '../Views/Article/Detail/'

const routeConfig = [
  {
	component: App,
	routes: [
	  {
		path: '/',
		exact: true,
		component: Home
		},
		{
			path: '/article/:id',
			component: ArticleDetail
		},
	  {
		path: '/about',
		component: About
	  },
	  {
		path: '/blogs',
		component: Blog
	  },
	  {
		path: '/resume',
		component: Resume
	  }
	]
  }
]
export default routeConfig