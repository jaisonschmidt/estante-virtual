import { expect } from 'chai'
import Vue from 'vue'
import LoginForm from '@/components/LoginForm';
import SignupForm from '@/components/SignupForm'

describe('Login form- components/LoginForm.vue', () => {

    describe('Login form structure', () => {
        it('render login form with email, password and submit button', () => {
            const vm = new Vue(LoginForm).$mount()

            expect(vm.$el.querySelectorAll('#txtEmail').length).to.equal(1)
            expect(vm.$el.querySelectorAll('#txtPassword').length).to.equal(1)
            expect(vm.$el.querySelectorAll('button[type="submit"]').length).to.equal(1)
        })

        it('verify if email and password are required fields', () => {
            const vm = new Vue(LoginForm).$mount()

            expect(vm.$el.querySelectorAll('#txtEmail[required]').length).to.equal(1)
            expect(vm.$el.querySelectorAll('#txtPassword[required]').length).to.equal(1)
        })

        it('verify if all inputs have maxlength property', () => {
            const vm = new Vue(SignupForm).$mount()
            expect(vm.$el.querySelectorAll('input').length).to.equal(vm.$el.querySelectorAll('input[maxlength]').length)
        })
    })

})

describe('Signup form - components/SignupForm.vue', () => {

    describe('Signup form structure', () => {
        it('render signup form with name, email, password and submit button', () => {
            const vm = new Vue(SignupForm).$mount()

            expect(vm.$el.querySelectorAll('#txtName').length).to.equal(1)
            expect(vm.$el.querySelectorAll('#txtEmail').length).to.equal(1)
            expect(vm.$el.querySelectorAll('#txtPassword').length).to.equal(1)
            expect(vm.$el.querySelectorAll('button[type="submit"]').length).to.equal(1)
        })

        it('verify if all inputs are required', () => {
            const vm = new Vue(SignupForm).$mount()
            expect(vm.$el.querySelectorAll('input[required]').length).to.equal(3)
        })

        it('verify if all inputs have maxlength property', () => {
            const vm = new Vue(SignupForm).$mount()
            expect(vm.$el.querySelectorAll('input').length).to.equal(vm.$el.querySelectorAll('input[maxlength]').length)
        })
    })

})