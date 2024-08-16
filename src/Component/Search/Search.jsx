// Search.jsx

import './SearchStyle.css'

function Search() {
    return (
        <section id="search" style={{width: '100%', margin: '0 auto'}}>
            <div className="-search">
                <div className="-search-box">
                    <input type="text" className="-search-input" />
                    <div className="-btn">
                        <i className="bi bi-search" style={{fontSize:'24px', color:'#fff', fontWeight: 'bold'}}></i>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
  export default Search;  
  