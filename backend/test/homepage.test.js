// let chai = require('chai');
import chai from 'chai';



import chaiHttp from 'chai-http';
// let server = require('../backend/server.js');
import server from '../server.js';



//Assertion Style 
chai.should();




chai.use(chaiHttp);


describe(' Products - API ', () => {



    //Test the GET route
    describe('GET /', () => {
        it('it should GET all the products', (done) => {
            chai.request(server)
                .get('/api/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    //Test the GET route for all the products in the top 
    describe('GET /products', () => {
        it('it should GET all the products in teh carousel', (done) => {
            chai.request(server)
                .get('/products/top')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    }

)
    // Test the GET routr for a single product by :id
    describe('GET /products/:id', () => {
        it('it should GET a product by the given id', (done) => {
            let product = new Product({
                name: "Test Product",
                description: "Test Description",
                price: 100,
                category: "Test Category"
            });
            product.save((err, product) => {
                chai.request(server)
                    .get('/products/' + product.id)
                    .send(product)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('name');
                        res.body.should.have.property('description');
                        res.body.should.have.property('price');
                        res.body.should.have.property('category');
                        res.body.should.have.property('_id').eql(product.id);
                        done();
                    });
            });
        });
    }
)

// Test the POST route
describe('POST /products', () => {
    it('it should POST a product', (done) => {
        let product = {
            name: "Test Product",
            description: "Test Description",
            price: 100,
            category: "Test Category"
        };
        chai.request(server)
            .post('api/products/')
            .send(product)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('description');
                res.body.should.have.property('price');
                res.body.should.have.property('category');
                res.body.should.have.property('_id');
                done();
            });
    });





}); 


});
