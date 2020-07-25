import Login from '../pageObjects/login'
import NewPost from '../pageObjects/newpost'
describe('Login', function(){
    const login = new Login()
    const newpost = new NewPost()
    beforeEach(function () {
        cy.fixture('userLoginDetails').as('user')
        cy.fixture('newArticleDetails').as('new')
    })
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type(this.user.email)
        login.password().type(this.user.password)
        login.signInButton().should('be.visible').click()
    })
    it('create new Article', function(){
        cy.contains('New Post').click()
        cy.hash().should('include','#/editor')
    
        newpost.title().type(this.new.title)
        newpost.describtion().type(this.new.describtion)
        newpost.body().type(this.new.body)
        newpost.body().type(this.new.tag)
       
    })
})
