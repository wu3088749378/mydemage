import Mock from 'mockjs'

Mock.mock('/vue/login','get',{
	username:'admin',
	password:'1234',
	token:'123'
})