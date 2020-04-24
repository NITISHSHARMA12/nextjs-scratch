export default ()=>(

    <section>
        <div className="container-fluid padding-zero">
            <div className="copy-right-footer">
                <p>Copyright {new Date().getFullYear()} | BK Arogyam</p>
            </div>

        </div>

        <style jsx>
            {`
                .copy-right-footer{
                    color:#ffff;
                    padding:40px 0 ;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    background: #3e5050;
                    text-align: center;
                }
                .padding-zero{
                    padding:0;
                }
            `}
        </style>
    </section>
)