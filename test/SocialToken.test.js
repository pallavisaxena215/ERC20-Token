const { assert } = require("chai")

const SocialToken  = artifacts.require('./SocialToken.sol')

contract('SocialToken', ()=>{
    let social

    before(async() =>{
    social = await SocialToken.deployed()

    })

    describe('Contract Deployed', async() =>{
        it('successful', async()=>{
            const name = await social.name()
            assert.equal(name,'SocialToken')
        })


        it('has symbol', async()=>{
            const symbol = await social.symbol()
            assert.equal(symbol,'ST')
        })
    })
})