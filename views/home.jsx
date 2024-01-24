const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
                <img src="/images/sunorwind-PgkGsxjvGB4-unsplash.jpg" alt="Slice of Lasagna" height="500px" width="500"/>
                <div>
                Photo by <a href="https://unsplash.com/@sunorwind?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">sunorwind</a> on <a href="https://unsplash.com/photos/cooked-food-with-sauce-PgkGsxjvGB4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
              </div>
            </div>

            <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

        </main>
    </Def>
  )
}


module.exports = home
