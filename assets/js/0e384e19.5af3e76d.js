"use strict";(self.webpackChunklithium_docs=self.webpackChunklithium_docs||[]).push([[671],{426:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Getting started",p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started",description:"Lithium is the best way to create a CLI in JavaScript. You can do it in literally minutes. Don't spend another second dealing with process.argv again. Lithium speeds that process up exponentially with an API that feels like using Express.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/lithium/docs/intro",editUrl:"https://github.com/ranjithrd/lithium/edit/gh-pages/docs/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Creating an app",permalink:"/lithium/docs/starting"}},u=[{value:"FAQs",id:"faqs",children:[]}],m={toc:u};function c(t){var e=t.components,n=(0,i.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"Lithium is the best way to create a CLI in JavaScript. You can do it in literally minutes. Don't spend another second dealing with ",(0,r.kt)("inlineCode",{parentName:"p"},"process.argv")," again. Lithium speeds that process up exponentially with an API that feels like using Express."),(0,r.kt)("p",null,"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const app = require("lithium-cli")()\n\napp.command("say", ({ args: { root } }) => {\n    console.log(app.colour.blueBright(root))\n})\n\napp.start()\n')),(0,r.kt)("p",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'app_name say "Hello world"\n\n# O U T P U T\nHello world\n')),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"How is this different from yargs or similar packages?")," Lithium offers a more complete and expressive API than some of those frameworks. However, it's always good to try everything out.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Can I use this in an existing Node project?")," Yep! You can just ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install lithium-cli")," and you can use the commands, config, everything when you call the node script.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Can I use this without NPM?")," Yes! Just navigate to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ranjithrd/lithium"},"GitHub Repo")," and copy ",(0,r.kt)("inlineCode",{parentName:"p"},"lithium.js")," and install the peer dependencies from ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". You can import that file and use the whole thing, auto-complete and all!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Where could I use this?")," Really, anywhere. I personally like using this with frontend projects rather than npm scripts, but you can use this literally anywhere you are calling Node from the command line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"I'm sold. How do I get started?")," Great to hear that! Check out ",(0,r.kt)("a",{parentName:"p",href:"starting"},"this link")," and you can start within just 5 minutes."))))}c.isMDXComponent=!0}}]);