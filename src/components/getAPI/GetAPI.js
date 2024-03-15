import React from "react";
import "./GetAPI.css";
function GetAPI() {
  return (
    <section id="api-section" className="GetApi-main-wrapper">
      <div className="Get-api-main-wrapper">
        <div style={{ width: "100%" }}>
          <h2 className="get-api-main-heading">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                Integrate it anywhere with Clipdrop Upscale API
              </font>
            </font>
          </h2>
          <div className="get-api-code-section-wrapper">
            <pre className="get-api-tabs-wraper" tabindex="0">
              <code className="language-js">
                <span className="token keyword">const</span> form{" "}
                <span className="token operator">=</span>{" "}
                <span className="token keyword">new</span>{" "}
                <span className="token class-name">FormData</span>
                <span className="token punctuation">(</span>
                <span className="token punctuation">)</span>
                form<span className="token punctuation">.</span>
                <span className="token function">append</span>
                <span className="token punctuation">(</span>
                <span className="token string">'image_file'</span>
                <span className="token punctuation">,</span> photo
                <span className="token punctuation">)</span>
                <font></font>
                <font></font>
                <span className="token function">fetch</span>
                <span className="token punctuation">(</span>
                <span className="token string">
                  'https://apis.clipdrop.co/super-resolution/v1'
                </span>
                <span className="token punctuation">,</span>{" "}
                <span className="token punctuation">{"{"}</span>
                <span className="token literal-property property">method</span>
                <span className="token operator">:</span>{" "}
                <span className="token string">'POST'</span>
                <span className="token punctuation">,</span>
                <span className="token literal-property property">headers</span>
                <span className="token operator">:</span>{" "}
                <span className="token punctuation">{"{"}</span>
                <span className="token string-property property">
                  'x-api-key'
                </span>
                <span className="token operator">:</span>{" "}
                <span className="token constant">YOUR_API_KEY</span>
                <span className="token punctuation">,</span>
                <span className="token punctuation">&rbrace;</span>
                <span className="token punctuation">,</span>
                <span className="token literal-property property">body</span>
                <span className="token operator">:</span> form
                <span className="token punctuation">,</span>
                <span className="token punctuation">&rbrace;</span>
                <span className="token punctuation">)</span>
                <span className="token punctuation">.</span>
                <span className="token function">then</span>
                <span className="token punctuation">(</span>
                <span className="token parameter">response</span>{" "}
                <span className="token operator">=&gt;</span> response
                <span className="token punctuation">.</span>
                <span className="token function">arrayBuffer</span>
                <span className="token punctuation">(</span>
                <span className="token punctuation">)</span>
                <span className="token punctuation">)</span>
                <span className="token punctuation">.</span>
                <span className="token function">then</span>
                <span className="token punctuation">(</span>
                <span className="token parameter">buffer</span>{" "}
                <span className="token operator">=&gt;</span>{" "}
                <span className="token punctuation">{"{"}</span>
                <span className="token comment">
                  // buffer here is a binary representation of the returned
                  image
                </span>
                <span className="token punctuation">&rbrace;</span>
                <span className="token punctuation">)</span>
              </code>
            </pre>
            <div className="get-api-obtain-section">
              <a href="/apis">
                <button className="obtain-an-api-key">
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Obtain an API key
                    </font>
                  </font>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetAPI;
