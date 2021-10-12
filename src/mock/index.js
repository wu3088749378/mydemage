import Mock from 'mockjs'

Mock.mock('/api/list','get',{
	username:'admin',
	password:'1234'
})