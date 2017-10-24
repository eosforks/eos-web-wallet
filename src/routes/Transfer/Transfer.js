import * as React from "react";
import { Link } from "react-router-dom";
import Transactions from "containers/Transactions";
import transactions from "fixtures/transactions";

const Transfer = () => (
  <div className="columns is-desktop content is-variable is-6">
    <div className="column is-7-desktop is-12-tablet">
      <article className="u-mb6">
        <h2 className="title is-2">Transfer</h2>
        <p>Move funds to another EOS account.</p>
        <form>
          <div className="field">
            <label className="label" htmlFor="to">To</label>
            <div className="control">
              <input type="text" name="to" className="input" />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="amount"><p>Amount<a className="help">Use Full Balance</a></p></label>
            <div className="control">
              <input type="text" name="amount" className="input" />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="memo">Memo</label>
            <div className="control">
              <input type="text" name="memo" className="input" />
            </div>
          </div>
          <div className="field is-grouped u-mt4">
            <div className="control">
              <button className="button is-large is-fullwidth is-primary">Submit</button>
            </div>
            <div className="control">
              <button className="button is-large is-fullwidth is-secondary">Clear</button>
            </div>
          </div>
        </form>
      </article>
      <article>
        <h3 className="title is-3"><p>Transaction History<span className="help"><a>See All</a></span></p></h3>

        <Transactions
          count={5}
          data={transactions}
        />
        
        <div className="control u-mt4">
          <Link 
            className="button is-large is-primary"
            to="/transactions"
          >
            View All
          </Link>
        </div>
      </article>
    </div>
    <div className="column is-5-desktop is-12-tablet">
      <article className="section">
        <h5 className="title is-5">What are EOS tokens?</h5>
        <div className="box">
          EOS tokens are ERC-20 compatible tokens distributed on the
          Ethereum blockchain pursuant to a related ERC-20 smart
          contract (the “EOS Tokens”).
        </div>
      </article>
      <article className="section">
        <h5 className="title is-5">How can I use EOS tokens?</h5>
        <div className="box">
          block.one is building the EOS.IO Software but it will not
          configure and/or launch any public blockchain platform
          adopting the open source EOS.IO Software (the “EOS
          Platform”). Any launch of an EOS Platform will occur by
          members of the community unrelated to block.one. Third
          parties launching the EOS Platform may delete, modify or
          supplement the EOS.IO Software prior to, during or after
          launching the EOS Platform.
        </div>
      </article>  
    </div>
  </div>
);

export default Transfer;