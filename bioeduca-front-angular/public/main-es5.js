(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n    <app-topbar></app-topbar>\n    <!-- main app container -->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"container-fluid\">\n                <div class=\"col-lg-12\">\n                        <router-outlet></router-outlet>\n                </div>\n            </div>\n        </div>\n    </div>\n    <hr>\n    <!-- credits -->\n    <div class=\"text-center mt-4\">\n        <p>\n            - BioEduca 1.0 -\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/alerts/alerts.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/alerts/alerts.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-primary\" role=\"alert\">\n    {{content}}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/topbar/topbar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/topbar/topbar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-lg-4\">\n<a class=\"navbar-brand\" routerLink=\"/\">BioEduca</a>\n<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n</button>\n\n<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n    <li class=\"nav-item active\" *ngIf=\"currentUser\">\n        <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item active\" *ngIf=\"currentUser\">\n        <a class=\"nav-link\" routerLink=\"/software-meus-sugeridos\">Meus Softwares <span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item active\" *ngIf=\"currentUser\">\n        <a class=\"nav-link\" routerLink=\"/pendencia\">Minhas Pendências<span class=\"sr-only\">(current)</span></a>\n    </li>\n    </ul>\n    <div class=\"my-2 my-lg-0\" *ngIf=\"currentUser\">\n        <span class=\"text-info\"><small>Olá {{currentUser.nome}}</small></span>\n    <a class=\"btn btn-outline-info ml-lg-2 my-2 my-sm-0 text-info\" routerLink=\"usuario-consultar\" type=\"submit\"><i class=\"fas fa-user\"></i> Perfil</a>\n    <a class=\"btn btn-outline-info ml-lg-2 my-2 my-sm-0 text-info\" (click)=\"logout()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a>\n    </div>\n    <div class=\"my-2 my-lg-0\" *ngIf=\"!currentUser\">\n    <a class=\"btn btn-outline-info ml-lg-2 my-2 my-sm-0 text-info\" routerLink=\"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\n    </div>\n</div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/avaliacao/avaliacao.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/avaliacao/avaliacao.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"questoes\">\n    <div class=\"row\" *ngIf=\"show\">\n        <div class=\"col-lg-6 offset-lg-3\">\n            <app-alerts content={{msg}}></app-alerts>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-6 offset-lg-3\">\n            <h3 *ngIf=\"software\">Avaliar o software <br> <strong> {{software.nome}}</strong></h3>\n\n            <form [formGroup]=\"avaliacaoForm\" (ngSubmit)=\"onSubmit(avaliacaoForm.value)\">\n                <div class=\"form-group\" *ngFor=\"let q of questoes.data; let i = index\">\n\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <label for=\"nome{{i+1}}\">\n                                {{i+1}} - {{q.questao}}\n                            </label>\n\n                            <div class=\"form-check\">\n                                <input class=\"form-check-input\" (change)=\"setarNota(1)\" type=\"radio\"\n                                    formControlName=\"q{{i+1}}\" id=\"q{{i+1}}\" value=\"1\">\n                                <label class=\"form-check-label\" for=\"q{{i+1}}\">\n                                    Sim\n                                </label>\n                            </div>\n                            <div class=\"form-check\">\n                                <input class=\"form-check-input\" (change)=\"setarNota(-1)\" type=\"radio\"\n                                    formControlName=\"q{{i+1}}\" id=\"q{{i+1+1}}\" value=\"0\" checked>\n                                <label class=\"form-check-label\" for=\"q{{i+1+1}}\">\n                                    Não\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"comentario\">\n                        Comentário:\n                    </label>\n                    <textarea id=\"comentario\" formControlName=\"comentario\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.comentario.errors }\"></textarea>\n                    <div *ngIf=\"submitted && f.comentario.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.comentario.errors.required\">comentario obrigatório</div>\n                    </div>\n                </div>\n\n                <button class=\"btn\" type=\"submit\">Enviar</button>\n\n            </form>\n\n        </div>\n    </div>\n    <div class=\"row\" *ngIf=\"show\">\n        <div class=\"col-lg-6 offset-lg-3\">\n            <app-alerts content={{msg}}></app-alerts>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/ano-letivo/ano-letivo.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/ano-letivo/ano-letivo.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control form-control-sm\">\n    <option *ngFor=\"let op of anos\">{{op}}</option>\n</select>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/card/card.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/card/card.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <img class=\"card-img-top\"\n        src={{img}}\n        alt=\"Imagem de capa do card\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{nome}}</h5>\n        <p class=\"card-text\"> {{descricao}}</p>\n        <div class=\"text-center\">\n            <h2>{{valor * 10 / quant | currency: 'Nota: '}}</h2>\n            <star-rating value=\"{{valor * 5 / quant}}\" checkedcolor=\"red\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\"></star-rating>\n        \n            <a \n                [routerLink]=\"['/software-consultar', id]\" \n                queryParamsHandling=id \n                class=\"btn btn-info\">\n                Mais Detalhes\n            </a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/conteudo/conteudo.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/conteudo/conteudo.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control form-control-sm\">\n        <option *ngFor=\"let op of conteudo\">{{op}}</option>\n    </select>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 jumbotron\" *ngIf=\"sistema\">\n                <div class=\"row pb-md-5\">\n                    \n                    <div class=\"col-lg-4\">\n                        <app-ano-letivo></app-ano-letivo>\n                    </div>\n                    <div class=\"col-lg-4\">\n                            <app-conteudo></app-conteudo>\n                    </div>\n                    <div class=\"col-lg-4\">\n                        <a [routerLink]=\"['/software-cadastrar']\"  class=\"btn btn-secondary btn-sm active\" role=\"button\" aria-pressed=\"true\">Sugerir um software</a>\n                    </div>\n                </div>\n                \n                <div class=\"row\">\n                    <div class=\"col-lg-4\" *ngFor=\"let s of sistema.data\">\n                        <app-card \n                            id={{s._id}}\n                            site={{s.site}} \n                            nome={{s.nome}} site={{s.site}} \n                            desenvolvedor={{s.desenvolvedor}}\n                            anoletivo={{s.anoletiv}} \n                            conteudo={{s.conteudo}} \n                            descricao={{s.descricao}}\n                            rating={{s.rating}} instrucoesdeuso={{s.instrucoesdeuso}} img={{s.img}}>\n                        </app-card>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/inicial/inicial.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/inicial/inicial.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 mb-lg-3 text-right\">\n                <a [routerLink]=\"['/software-cadastrar']\" class=\"btn btn-secondary btn-sm active\" role=\"button\"\n                    aria-pressed=\"true\">Sugerir um software</a>\n            </div>\n            <div class=\"col-lg-12 jumbotron\" *ngIf=\"sistema\">\n                <div class=\"row pb-md-5\">\n                    <div class=\"col-lg-12\">\n                            <div class=\"row\">\n                                    <form [formGroup]=\"sugestForm\" class=\"form-inline\" (ngSubmit)=\"onSubmit(sugestForm.value)\">\n                                            <div class=\"form-group\">\n                                                <label for=\"anoletivo\" class=\"mr-lg-3\">\n                                                    Ano Letivo: \n                                                </label>\n                                                <select id=\"anoletivo\" formControlName=\"anoletivo\" (change)=\"setConteudo()\"\n                                                    class=\"form-control\">\n                                                    <option value=\"1\">1º ano</option>\n                                                    <option value=\"2\">2º ano</option>\n                                                    <option value=\"3\">3º ano</option>\n                                                </select>\n                                            </div>\n                                            <div class=\"form-group\" *ngIf=\"conteudo\">\n                                                <label for=\"conteudo\" class=\"ml-lg-3 mr-lg-3\">\n                                                    Conteúdo:\n                                                </label>\n                                                <select *ngIf=\"conteudo\" id=\"conteudo\" formControlName=\"conteudo\" class=\"form-control\">\n                                                    <option *ngFor=\"let c of conteudo | keyvalue\" value={{c.value}}>{{c.value}}</option>\n                    \n                                                </select>\n                                            </div>\n                                            <button *ngIf=\"conteudo\" class=\"btn btn-secondary btn-sm active ml-lg-3\" type=\"submit\"><i class=\"fas fa-filter\"></i> Filtrar</button>\n                                        </form>\n                            </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-lg-4\" *ngFor=\"let s of sistema.data\">\n                        <app-card id={{s._id}} site={{s.site}} nome={{s.nome}} site={{s.site}}\n                            desenvolvedor={{s.desenvolvedor}} anoletivo={{s.anoletiv}} conteudo={{s.conteudo}}\n                            descricao={{s.descricao}} rating={{s.rating}} instrucoesdeuso={{s.instrucoesdeuso}}\n                            img={{s.img}}>\n                        </app-card>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">BioEduca</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>\n<div class=\"col-md-6 offset-md-3 mt-5\"><a [routerLink]=\"['/usuario-cadastrar']\">Cadastrar</a></div>\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pendencia/pendencia.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pendencia/pendencia.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"row\">\n        <div class=\"col-lg-6 offset-lg-3\" *ngIf=\"pendencia\">\n            <div class=\"card\" *ngFor=\"let p of pendencia.data\">\n                <div class=\"card-body text-center\">\n                    Avaliação pendente para o software <strong>{{p.software_nome}}</strong>\n                </div>\n                <a class=\"btn btn-info m-lg-3\" routerLink=\"/avaliacao/{{p.software_id}}\">Avaliar</a>\n            </div>\n        </div>\n        <div class=\"col-lg-6 offset-lg-3\" *ngIf=\"!pendencia\">\n            <div class=\"card\">\n                <div class=\"card-body text-center\">\n                    Não há pendências\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/questoes/questoes.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/questoes/questoes.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul *ngIf=\"questoes\">\n    <li *ngFor=\"let q of questoes.data\">{{q.questao}}</li>\n</ul>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/software/software-alterar/software-alterar.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/software/software-alterar/software-alterar.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"show\">\n        <div class=\"col-lg-6\">\n            <app-alerts content={{msg}}></app-alerts>\n        </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\" *ngIf=\"!show\">\n        <div class=\"col-lg-6\">\n            <h3>Sugerir Software</h3>\n\n            <form [formGroup]=\"sugestForm\" (ngSubmit)=\"onSubmit(sugestForm.value)\">\n                <div class=\"form-group\" *ngIf=\"currentUser\">\n                    <label for=\"indicadopor\">Indicado por {{currentUser.nome}} </label>\n                    <input id=\"indicadopor\" type=\"hidden\" formControlName=\"indicadopor\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n                    <div *ngIf=\"submitted && f.indicadopor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.indicadopor.errors.required\">indicadopor obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"nome\">\n                        Nome:\n                    </label>\n                    <input id=\"nome\" name=\"nome\" type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n                    <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nome.errors.required\">nome obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"site\">\n                        Site:\n                    </label>\n                    <input id=\"site\" type=\"text\" formControlName=\"site\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.site.errors }\">\n                    <div *ngIf=\"submitted && f.site.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.site.errors.required\">site obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"desenvolvedor\">\n                        Desenvolvedor:\n                    </label>\n                    <input id=\"desenvolvedor\" type=\"text\" formControlName=\"desenvolvedor\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.desenvolvedor.errors }\">\n                    <div *ngIf=\"submitted && f.desenvolvedor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.desenvolvedor.errors.required\">desenvolvedor obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"anoletivo\">\n                        Ano Letivo:\n                    </label>\n                    <select id=\"anoletivo\" formControlName=\"anoletivo\" (change) = \"setConteudo()\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.anoletivo.errors }\">\n                        <option value=\"1\">1º ano</option>\n                        <option value=\"2\">2º ano</option>\n                        <option value=\"3\">3º ano</option>\n                    </select>\n                    <div *ngIf=\"submitted && f.anoletivo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.anoletivo.errors.required\">ano letivo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"conteudo\">\n                    <label for=\"conteudo\">\n                        Conteúdo:\n                    </label>\n                    <select *ngIf=\"conteudo\" id=\"conteudo\" formControlName=\"conteudo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.conteudo.errors }\">\n                        <option *ngFor=\"let c of conteudo | keyvalue\" value={{c.value}}>{{c.value}}</option>\n                       \n                    </select>\n                    <div *ngIf=\"submitted && f.conteudo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.conteudo.errors.required\">conteudo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"descricao\">\n                        Descrição:\n                    </label>\n                    <textarea id=\"descricao\" formControlName=\"descricao\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.descricao.errors }\"></textarea>\n                    <div *ngIf=\"submitted && f.descricao.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.descricao.errors.required\">descricao obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"intrucoesdeuso\">\n                        Instruções de uso:\n                    </label>\n                    <textarea id=\"intrucoesdeuso\" formControlName=\"intrucoesdeuso\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.intrucoesdeuso.errors }\"></textarea>\n                    <div *ngIf=\"submitted && f.intrucoesdeuso.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.intrucoesdeuso.errors.required\">intruções de uso obrigatório</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"img\">\n                        Imagem:\n                    </label>\n                    <div class=\"custom-file\">\n                        <form [formGroup]=\"formGroup\" novalidate>\n                            <input type=\"file\" (change)=\"onFileChange($event)\" />\n                        </form>\n                    </div>\n                </div>\n\n\n                <button class=\"btn\" type=\"submit\">Enviar</button>\n\n            </form>\n\n\n\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/software/software-cadastrar/software-cadastrar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/software/software-cadastrar/software-cadastrar.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"show\">\n        <div class=\"col-lg-6\">\n            <app-alerts content={{msg}}></app-alerts>\n        </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\" *ngIf=\"!show\">\n        <div class=\"col-lg-6\">\n            <h3>Sugerir Software</h3>\n\n            <form [formGroup]=\"sugestForm\" (ngSubmit)=\"onSubmit(sugestForm.value)\">\n                <div class=\"form-group\" *ngIf=\"currentUser\">\n                    <label for=\"indicadopor\">Indicado por {{currentUser.nome}} </label>\n                    <input id=\"indicadopor\" type=\"hidden\" formControlName=\"indicadopor\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n                    <div *ngIf=\"submitted && f.indicadopor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.indicadopor.errors.required\">indicadopor obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"nome\">\n                        Nome:\n                    </label>\n                    <input id=\"nome\" name=\"nome\" type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\">\n                    <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nome.errors.required\">nome obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"site\">\n                        Site:\n                    </label>\n                    <input id=\"site\" type=\"text\" formControlName=\"site\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.site.errors }\">\n                    <div *ngIf=\"submitted && f.site.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.site.errors.required\">site obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"desenvolvedor\">\n                        Desenvolvedor:\n                    </label>\n                    <input id=\"desenvolvedor\" type=\"text\" formControlName=\"desenvolvedor\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.desenvolvedor.errors }\">\n                    <div *ngIf=\"submitted && f.desenvolvedor.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.desenvolvedor.errors.required\">desenvolvedor obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"anoletivo\">\n                        Ano Letivo:\n                    </label>\n                    <select id=\"anoletivo\" formControlName=\"anoletivo\" (change) = \"setConteudo()\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.anoletivo.errors }\">\n                        <option value=\"1\">1º ano</option>\n                        <option value=\"2\">2º ano</option>\n                        <option value=\"3\">3º ano</option>\n                    </select>\n                    <div *ngIf=\"submitted && f.anoletivo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.anoletivo.errors.required\">ano letivo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\" *ngIf=\"conteudo\">\n                    <label for=\"conteudo\">\n                        Conteúdo:\n                    </label>\n                    <select *ngIf=\"conteudo\" id=\"conteudo\" formControlName=\"conteudo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.conteudo.errors }\">\n                        <option *ngFor=\"let c of conteudo | keyvalue\" value={{c.value}}>{{c.value}}</option>\n                       \n                    </select>\n                    <div *ngIf=\"submitted && f.conteudo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.conteudo.errors.required\">conteudo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"descricao\">\n                        Descrição:\n                    </label>\n                    <textarea id=\"descricao\" formControlName=\"descricao\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.descricao.errors }\"></textarea>\n                    <div *ngIf=\"submitted && f.descricao.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.descricao.errors.required\">descricao obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"intrucoesdeuso\">\n                        Instruções de uso:\n                    </label>\n                    <textarea id=\"intrucoesdeuso\" formControlName=\"intrucoesdeuso\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.intrucoesdeuso.errors }\"></textarea>\n                    <div *ngIf=\"submitted && f.intrucoesdeuso.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.intrucoesdeuso.errors.required\">intruções de uso obrigatório</div>\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label for=\"img\">\n                        Imagem:\n                    </label>\n                    <div class=\"custom-file\">\n                        <form [formGroup]=\"formGroup\" novalidate>\n                            <input type=\"file\" (change)=\"onFileChange($event)\" />\n                        </form>\n                    </div>\n                    <span><small>*Imagem com largura de até 600px ou tamanho 70k</small></span>\n                </div>\n                <button class=\"btn btn-secondary btn-sm active col-lg-4\" type=\"submit\">Cadastrar</button>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/software/software-consultar/software-consultar.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/software/software-consultar/software-consultar.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"myIndications\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-6 offset-lg-3\">\n                <h1>{{myIndications.nome}}</h1>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-6 offset-lg-3\">\n                <div class=\"card\">\n                    <img src={{myIndications.img}} class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 text-center\">\n                                <h4 class=\"card-title\">{{myIndications.nome}}</h4>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 text-left\">\n                                <p class=\"card-text\">{{myIndications.descricao}}</p>\n                            </div>\n                        </div>\n                        <div class=\"row mt-lg-3\" *ngIf=\"myIndications.intrucoesdeuso\">\n                            <div class=\"col-lg-12 text-left\">\n                                <h5>Intrução de uso</h5>\n                                <p class=\"card-text\">{{myIndications.intrucoesdeuso}}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 text-center\">\n                                <button type=\"button\" *ngIf=\"showLink\" class=\"btn btn-secondary col-lg-12\"\n                                    data-toggle=\"modal\" data-target=\"#exampleModal\">\n                                    Acessar link do software\n                                </button></div>\n                            <div class=\"col-lg-12 text-center\" *ngIf=\"showAvaliar\">\n                                <div class=\"alert alert-danger\" role=\"alert\">\n                                    Link Bloqueado. Você possui pendência de avaliação.\n                                </div>\n                                <a class=\"btn btn-info col-lg-12\" routerLink=\"/pendencia/\">Avaliar</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mt-lg-3\" *ngIf=\"avaliacao\">\n            <div class=\"col-lg-6 offset-lg-3\">\n\n                <ul class=\"list-unstyled\">\n                    <li class=\"media\" *ngFor=\"let a of avaliacao.data\">\n                        <div class=\"card mt-lg-3\">\n                            <div class=\"card-body\">\n                                <img src=\"../../../../assets/user.png\" width=\"20%\" class=\"mr-3\" alt=\"...\">\n                                <div class=\"media-body\">\n                                    <h5 class=\"mt-0 mb-1\">{{a.nome}}</h5>\n                                    <p class=\"font-weight-lighter font-italic\"> {{a.comentario}}\n                                    </p>\n                                    <div class=\"text-center\">\n                                        <h2>{{a.pontuacao * 10 | currency: 'Nota: '}}</h2>\n                                        <star-rating value=\"{{a.pontuacao * 10 * 5 / 12}}\" checkedcolor=\"red\"\n                                            uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\"></star-rating>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </li>\n                </ul>\n\n            </div>\n        </div>\n    </div>\n\n\n\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n        aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Link</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"card mb-lg-2\" *ngIf=\"!showLink\">\n                        <div class=\"card-body text-center\">\n                            <h6 class=\"card-subtitle mb-2 text-muted\">{{myIndications.site}}</h6>\n                        </div>\n                    </div>\n                    <div class=\"alert alert-info\" role=\"alert\">\n                        Para continuar a utilizar a plataforma você concorda em avaliar o software? Caso não avalie,\n                        será bloqueado e não poderá mais visualizar os links para utilizar os softwares até que avalie\n                        este software.\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Fechar</button>\n                    <button type=\"button\" class=\"btn btn-primary\"\n                        (click)=\"gerarPendenca(myIndications._id, myIndications.nome)\">Concordo</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1>Meus softwares sugeridos</h1>\n            </div>\n        </div>\n        <div class=\"row\" *ngIf=\"myIndications\">\n            <div class=\"col-lg-3\" *ngFor=\"let s of myIndications.data\">\n                <div class=\"card\">\n                    <img src={{s.img}} class=\"card-img-top\" alt=\"...\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">{{s.nome}}</h5>\n                        <h6 class=\"card-subtitle mb-2 text-muted\">{{s.site}}</h6>\n                        <p class=\"card-text\">{{s.descricao}}</p>\n                        <a [routerLink]=\"['/software-alterar', s._id]\" queryParamsHandling=s._id\n                            class=\"card-link\">Editar</a>\n                        <a (click)=\"remove(s._id)\" class=\"card-link\">Excluir</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/software/software.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/software/software.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-software-consultar></app-software-consultar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-alterar/usuario-alterar.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario-alterar/usuario-alterar.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">BioEduca Edita usuário</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"nome\">Nome</label>\n                    <input type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\" />\n                    <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nome.errors.required\">Nome obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"ocupacao\">Ocupação</label>\n                    <input type=\"text\" formControlName=\"ocupacao\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ocupacao.errors }\" />\n                    <div *ngIf=\"submitted && f.ocupacao.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.ocupacao.errors.required\">ocupacao obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sexo\">Sexo</label>\n                    <input type=\"text\" formControlName=\"sexo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.sexo.errors }\" />\n                    <div *ngIf=\"submitted && f.sexo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.sexo.errors.required\">sexo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">E-mail</label>\n                    <input aria-disabled=\"true\" type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">email obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Senha obrigatoria</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 mt-5\">\n    <div class=\"card\">\n        <h4 class=\"card-header\">BioEduca novo usuário</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"nome\">Nome</label>\n                    <input type=\"text\" formControlName=\"nome\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.nome.errors }\" />\n                    <div *ngIf=\"submitted && f.nome.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.nome.errors.required\">Nome obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"ocupacao\">Ocupação</label>\n                    <input type=\"text\" formControlName=\"ocupacao\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.ocupacao.errors }\" />\n                    <div *ngIf=\"submitted && f.ocupacao.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.ocupacao.errors.required\">ocupacao obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"sexo\">Sexo</label>\n                    <input type=\"text\" formControlName=\"sexo\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.sexo.errors }\" />\n                    <div *ngIf=\"submitted && f.sexo.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.sexo.errors.required\">sexo obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">E-mail</label>\n                    <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\n                    <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.email.errors.required\">email obrigatório</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Senha obrigatoria</div>\n                    </div>\n                </div>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Login\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\n            </form>\n        </div>\n    </div>\n</div>    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-consultar/usuario-consultar.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario-consultar/usuario-consultar.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Perfil</h1>\n<ul>\n    <li>Nome: {{currentUser.nome}}</li>\n    <li>Email: {{currentUser.username}}</li>\n    <li>Sexo: {{currentUser.sexo}}</li>\n    <li>Ocupacao: {{currentUser.ocupacao}}</li>\n</ul>\n<a [routerLink]=\"['/usuario-alterar']\">Alterar</a>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-excluir/usuario-excluir.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario-excluir/usuario-excluir.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a>Excluir</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/usuario/usuario.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_helpers/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_helpers/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_2__["JwtInterceptor"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");






var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/authentication", {
            "strategy": "local",
            "email": username,
            "password": password
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            _this._user = {
                id: user.user._id,
                username: user.user.email,
                nome: user.user.nome,
                ocupacao: user.user.ocupacao,
                sexo: user.user.sexo,
                token: user.accessToken
            };
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(_this._user));
            _this.currentUserSubject.next(_this._user);
            return _this._user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/avaliacao.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/avaliacao.service.ts ***!
  \************************************************/
/*! exports provided: AvaliacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliacaoService", function() { return AvaliacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AvaliacaoService = /** @class */ (function () {
    function AvaliacaoService(http) {
        this.http = http;
        this.URL = 'https://crtcc.herokuapp.com/';
    }
    AvaliacaoService.prototype.getAll = function () {
        return this.http.get("https://crtcc.herokuapp.com/avaliacao");
    };
    AvaliacaoService.prototype.getIndication = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/avaliacao?indicadopor=" + id);
    };
    AvaliacaoService.prototype.getById = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/avaliacao/" + id);
    };
    AvaliacaoService.prototype.add = function (sugestao) {
        return this.http.post("https://crtcc.herokuapp.com/avaliacao", sugestao);
    };
    AvaliacaoService.prototype.remove = function (id) {
        return this.http.delete("https://crtcc.herokuapp.com/avaliacao/" + id);
    };
    AvaliacaoService.prototype.update = function (id, avaliacao) {
        return this.http.put("https://crtcc.herokuapp.com/avaliacao/" + id, avaliacao);
    };
    AvaliacaoService.prototype.getBySoftId = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/avaliacao?software=" + id);
    };
    AvaliacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AvaliacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AvaliacaoService);
    return AvaliacaoService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/pendencia.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/pendencia.service.ts ***!
  \************************************************/
/*! exports provided: PendenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendenciaService", function() { return PendenciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PendenciaService = /** @class */ (function () {
    function PendenciaService(http) {
        this.http = http;
        this.URL = 'https://crtcc.herokuapp.com/';
    }
    PendenciaService.prototype.getAll = function () {
        return this.http.get("https://crtcc.herokuapp.com/pendencia");
    };
    PendenciaService.prototype.getByUser = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/pendencia?user_id=" + id);
    };
    PendenciaService.prototype.getById = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/pendencia/" + id);
    };
    PendenciaService.prototype.add = function (data) {
        return this.http.post("https://crtcc.herokuapp.com/pendencia", data);
    };
    PendenciaService.prototype.remove = function (id) {
        return this.http.delete("https://crtcc.herokuapp.com/pendencia/" + id);
    };
    PendenciaService.prototype.removeBySoftware_id = function (id) {
        var _this = this;
        return this.http.get("https://crtcc.herokuapp.com/pendencia?software_id=" + id)
            .subscribe(function (s) {
            _this.sw = s;
            _this.remove(_this.sw.data[0]._id).subscribe(function (r) { return console.log('removido', r); });
        });
    };
    PendenciaService.prototype.update = function (id, sistema) {
        return this.http.put("https://crtcc.herokuapp.com/pendencia/" + id, sistema);
    };
    PendenciaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PendenciaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PendenciaService);
    return PendenciaService;
}());



/***/ }),

/***/ "./src/app/_services/questoes.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/questoes.service.ts ***!
  \***********************************************/
/*! exports provided: QuestoesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesService", function() { return QuestoesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuestoesService = /** @class */ (function () {
    function QuestoesService(http) {
        this.http = http;
        this.URL = 'https://crtcc.herokuapp.com/';
    }
    QuestoesService.prototype.getAll = function () {
        return this.http.get("https://crtcc.herokuapp.com/questao/?$limit=20");
    };
    QuestoesService.prototype.getIndication = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/questao?indicadopor=" + id);
    };
    QuestoesService.prototype.getById = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/questao/" + id);
    };
    QuestoesService.prototype.add = function (sugestao) {
        return this.http.post("https://crtcc.herokuapp.com/questao", sugestao);
    };
    QuestoesService.prototype.remove = function (id) {
        return this.http.delete("https://crtcc.herokuapp.com/questao/" + id);
    };
    QuestoesService.prototype.update = function (id, questao) {
        return this.http.put("https://crtcc.herokuapp.com/questao/" + id, questao);
    };
    QuestoesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuestoesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestoesService);
    return QuestoesService;
}());



/***/ }),

/***/ "./src/app/_services/sugestao.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/sugestao.service.ts ***!
  \***********************************************/
/*! exports provided: SugestaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SugestaoService", function() { return SugestaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SugestaoService = /** @class */ (function () {
    function SugestaoService(http) {
        this.http = http;
        this.URL = 'https://crtcc.herokuapp.com/';
    }
    SugestaoService.prototype.getAll = function () {
        return this.http.get("https://crtcc.herokuapp.com/sistema");
    };
    SugestaoService.prototype.getIndication = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/sistema?indicadopor=" + id);
    };
    SugestaoService.prototype.getById = function (id) {
        return this.http.get("https://crtcc.herokuapp.com/sistema/" + id);
    };
    SugestaoService.prototype.getFilter = function (ano, conteudo) {
        return this.http.get("https://crtcc.herokuapp.com/sistema?anoletivo=" + ano + "&conteudo=" + conteudo);
    };
    SugestaoService.prototype.add = function (sugestao) {
        return this.http.post("https://crtcc.herokuapp.com/sistema", sugestao);
    };
    SugestaoService.prototype.remove = function (id) {
        return this.http.delete("https://crtcc.herokuapp.com/sistema/" + id);
    };
    SugestaoService.prototype.update = function (id, sistema) {
        return this.http.put("https://crtcc.herokuapp.com/sistema/" + id, sistema);
    };
    SugestaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SugestaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SugestaoService);
    return SugestaoService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users");
    };
    UserService.prototype.registerUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users", user);
    };
    UserService.prototype.updateUser = function (id, data) {
        console.log('--->', id, data);
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/" + id, data);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app', template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm5/ng-starrating.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login */ "./src/app/components/login/index.ts");
/* harmony import */ var _components_home_ano_letivo_ano_letivo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/ano-letivo/ano-letivo.component */ "./src/app/components/home/ano-letivo/ano-letivo.component.ts");
/* harmony import */ var _components_software_software_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/software/software.component */ "./src/app/components/software/software.component.ts");
/* harmony import */ var _components_home_conteudo_conteudo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/conteudo/conteudo.component */ "./src/app/components/home/conteudo/conteudo.component.ts");
/* harmony import */ var _components_home_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/card/card.component */ "./src/app/components/home/card/card.component.ts");
/* harmony import */ var _common_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/alerts/alerts.component */ "./src/app/common/alerts/alerts.component.ts");
/* harmony import */ var _common_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/topbar/topbar.component */ "./src/app/common/topbar/topbar.component.ts");
/* harmony import */ var _components_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/inicial/inicial.component */ "./src/app/components/inicial/inicial.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "./src/app/components/usuario/usuario.component.ts");
/* harmony import */ var _components_usuario_usuario_cadastrar_usuario_cadastrar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/usuario/usuario-cadastrar/usuario-cadastrar.component */ "./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.ts");
/* harmony import */ var _components_usuario_usuario_consultar_usuario_consultar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/usuario/usuario-consultar/usuario-consultar.component */ "./src/app/components/usuario/usuario-consultar/usuario-consultar.component.ts");
/* harmony import */ var _components_usuario_usuario_alterar_usuario_alterar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/usuario/usuario-alterar/usuario-alterar.component */ "./src/app/components/usuario/usuario-alterar/usuario-alterar.component.ts");
/* harmony import */ var _components_usuario_usuario_excluir_usuario_excluir_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/usuario/usuario-excluir/usuario-excluir.component */ "./src/app/components/usuario/usuario-excluir/usuario-excluir.component.ts");
/* harmony import */ var _components_software_software_cadastrar_software_cadastrar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/software/software-cadastrar/software-cadastrar.component */ "./src/app/components/software/software-cadastrar/software-cadastrar.component.ts");
/* harmony import */ var _components_software_software_alterar_software_alterar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/software/software-alterar/software-alterar.component */ "./src/app/components/software/software-alterar/software-alterar.component.ts");
/* harmony import */ var _components_software_software_consultar_software_consultar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/software/software-consultar/software-consultar.component */ "./src/app/components/software/software-consultar/software-consultar.component.ts");
/* harmony import */ var _components_software_software_meus_sugeridos_software_meus_sugeridos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/software/software-meus-sugeridos/software-meus-sugeridos.component */ "./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.ts");
/* harmony import */ var _components_avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/avaliacao/avaliacao.component */ "./src/app/components/avaliacao/avaliacao.component.ts");
/* harmony import */ var _components_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/questoes/questoes.component */ "./src/app/components/questoes/questoes.component.ts");
/* harmony import */ var _components_pendencia_pendencia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/pendencia/pendencia.component */ "./src/app/components/pendencia/pendencia.component.ts");










;




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"],
                ng_starrating__WEBPACK_IMPORTED_MODULE_5__["RatingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _components_login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_home_ano_letivo_ano_letivo_component__WEBPACK_IMPORTED_MODULE_10__["AnoLetivoComponent"],
                _components_software_software_component__WEBPACK_IMPORTED_MODULE_11__["SoftwareComponent"],
                _components_home_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"],
                _components_home_conteudo_conteudo_component__WEBPACK_IMPORTED_MODULE_12__["ConteudoComponent"],
                _common_alerts_alerts_component__WEBPACK_IMPORTED_MODULE_14__["AlertsComponent"],
                _common_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_15__["TopbarComponent"],
                _components_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_16__["InicialComponent"],
                _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_18__["UsuarioComponent"],
                _components_usuario_usuario_excluir_usuario_excluir_component__WEBPACK_IMPORTED_MODULE_22__["UsuarioExcluirComponent"],
                _components_usuario_usuario_alterar_usuario_alterar_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioAlterarComponent"],
                _components_usuario_usuario_consultar_usuario_consultar_component__WEBPACK_IMPORTED_MODULE_20__["UsuarioConsultarComponent"],
                _components_usuario_usuario_cadastrar_usuario_cadastrar_component__WEBPACK_IMPORTED_MODULE_19__["UsuarioCadastrarComponent"],
                _components_software_software_consultar_software_consultar_component__WEBPACK_IMPORTED_MODULE_25__["SoftwareConsultarComponent"],
                _components_software_software_alterar_software_alterar_component__WEBPACK_IMPORTED_MODULE_24__["SoftwareAlterarComponent"],
                _components_software_software_cadastrar_software_cadastrar_component__WEBPACK_IMPORTED_MODULE_23__["SoftwareCadastrarComponent"],
                _components_software_software_meus_sugeridos_software_meus_sugeridos_component__WEBPACK_IMPORTED_MODULE_26__["SoftwareMeusSugeridosComponent"],
                _components_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_28__["QuestoesComponent"],
                _components_avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_27__["AvaliacaoComponent"],
                _components_pendencia_pendencia_component__WEBPACK_IMPORTED_MODULE_29__["PendenciaComponent"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login */ "./src/app/components/login/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _components_software_software_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/software/software.component */ "./src/app/components/software/software.component.ts");
/* harmony import */ var _components_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inicial/inicial.component */ "./src/app/components/inicial/inicial.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_usuario_usuario_cadastrar_usuario_cadastrar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/usuario/usuario-cadastrar/usuario-cadastrar.component */ "./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.ts");
/* harmony import */ var _components_usuario_usuario_consultar_usuario_consultar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/usuario/usuario-consultar/usuario-consultar.component */ "./src/app/components/usuario/usuario-consultar/usuario-consultar.component.ts");
/* harmony import */ var _components_usuario_usuario_alterar_usuario_alterar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usuario/usuario-alterar/usuario-alterar.component */ "./src/app/components/usuario/usuario-alterar/usuario-alterar.component.ts");
/* harmony import */ var _components_software_software_cadastrar_software_cadastrar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/software/software-cadastrar/software-cadastrar.component */ "./src/app/components/software/software-cadastrar/software-cadastrar.component.ts");
/* harmony import */ var _components_software_software_alterar_software_alterar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/software/software-alterar/software-alterar.component */ "./src/app/components/software/software-alterar/software-alterar.component.ts");
/* harmony import */ var _components_software_software_consultar_software_consultar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/software/software-consultar/software-consultar.component */ "./src/app/components/software/software-consultar/software-consultar.component.ts");
/* harmony import */ var _components_software_software_meus_sugeridos_software_meus_sugeridos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/software/software-meus-sugeridos/software-meus-sugeridos.component */ "./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.ts");
/* harmony import */ var _components_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/questoes/questoes.component */ "./src/app/components/questoes/questoes.component.ts");
/* harmony import */ var _components_avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/avaliacao/avaliacao.component */ "./src/app/components/avaliacao/avaliacao.component.ts");
/* harmony import */ var _components_pendencia_pendencia_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pendencia/pendencia.component */ "./src/app/components/pendencia/pendencia.component.ts");
















var routes = [
    { path: '', component: _components_inicial_inicial_component__WEBPACK_IMPORTED_MODULE_4__["InicialComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'login', component: _components_login__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'usuario-cadastrar', component: _components_usuario_usuario_cadastrar_usuario_cadastrar_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioCadastrarComponent"] },
    { path: 'usuario-consultar', component: _components_usuario_usuario_consultar_usuario_consultar_component__WEBPACK_IMPORTED_MODULE_7__["UsuarioConsultarComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'usuario-alterar', component: _components_usuario_usuario_alterar_usuario_alterar_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioAlterarComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'software-cadastrar', component: _components_software_software_cadastrar_software_cadastrar_component__WEBPACK_IMPORTED_MODULE_9__["SoftwareCadastrarComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'software-alterar/:id', component: _components_software_software_alterar_software_alterar_component__WEBPACK_IMPORTED_MODULE_10__["SoftwareAlterarComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'software-consultar/:id', component: _components_software_software_consultar_software_consultar_component__WEBPACK_IMPORTED_MODULE_11__["SoftwareConsultarComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'software-meus-sugeridos', component: _components_software_software_meus_sugeridos_software_meus_sugeridos_component__WEBPACK_IMPORTED_MODULE_12__["SoftwareMeusSugeridosComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'questoes', component: _components_questoes_questoes_component__WEBPACK_IMPORTED_MODULE_13__["QuestoesComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'avaliacao/:id', component: _components_avaliacao_avaliacao_component__WEBPACK_IMPORTED_MODULE_14__["AvaliacaoComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'pendencia', component: _components_pendencia_pendencia_component__WEBPACK_IMPORTED_MODULE_15__["PendenciaComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'minhas-sugestoes', component: _components_software_software_component__WEBPACK_IMPORTED_MODULE_3__["SoftwareComponent"], canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var appRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/common/alerts/alerts.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/alerts/alerts.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9hbGVydHMvYWxlcnRzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/common/alerts/alerts.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/alerts/alerts.component.ts ***!
  \***************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertsComponent = /** @class */ (function () {
    function AlertsComponent() {
    }
    AlertsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AlertsComponent.prototype, "content", void 0);
    AlertsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! raw-loader!./alerts.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/alerts/alerts.component.html"),
            styles: [__webpack_require__(/*! ./alerts.component.less */ "./src/app/common/alerts/alerts.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertsComponent);
    return AlertsComponent;
}());



/***/ }),

/***/ "./src/app/common/topbar/topbar.component.less":
/*!*****************************************************!*\
  !*** ./src/app/common/topbar/topbar.component.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/common/topbar/topbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/topbar/topbar.component.ts ***!
  \***************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");




var TopbarComponent = /** @class */ (function () {
    function TopbarComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    TopbarComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    TopbarComponent.prototype.ngOnInit = function () {
        console.log('status usuario', this.currentUser);
    };
    TopbarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.less */ "./src/app/common/topbar/topbar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/components/avaliacao/avaliacao.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/avaliacao/avaliacao.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXZhbGlhY2FvL2F2YWxpYWNhby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/avaliacao/avaliacao.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/avaliacao/avaliacao.component.ts ***!
  \*************************************************************/
/*! exports provided: AvaliacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvaliacaoComponent", function() { return AvaliacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/questoes.service */ "./src/app/_services/questoes.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services/avaliacao.service */ "./src/app/_services/avaliacao.service.ts");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");
/* harmony import */ var _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/_services/pendencia.service */ "./src/app/_services/pendencia.service.ts");









var AvaliacaoComponent = /** @class */ (function () {
    function AvaliacaoComponent(_avaliacaoService, _questoesService, _sugestaoService, formBuilder, authenticationService, route, _pendencia) {
        this._avaliacaoService = _avaliacaoService;
        this._questoesService = _questoesService;
        this._sugestaoService = _sugestaoService;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.route = route;
        this._pendencia = _pendencia;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    AvaliacaoComponent.prototype.onSubmit = function (avaliacao) {
        var _this = this;
        this.submitted = true;
        if (this.avaliacaoForm.invalid) {
            console.log('travou', avaliacao);
            this.show = true;
            this.msg = 'Precisa responder a todas as perguntas!';
            return;
        }
        console.log('passou', avaliacao);
        this._avaliacaoService.add(avaliacao).subscribe(function (r) {
            _this.show = true;
            _this.msg = 'Avaliação concluida com sucesso';
            _this._pendencia.removeBySoftware_id(_this.currentSoftware.get('id'));
        });
    };
    AvaliacaoComponent.prototype.setarNota = function (n) {
        this.show = false;
        this.total = this.total + n;
        if (this.total > 0) {
            this.media = this.total / 12;
        }
        this.f.pontuacao.setValue(this.media);
    };
    Object.defineProperty(AvaliacaoComponent.prototype, "f", {
        get: function () { return this.avaliacaoForm.controls; },
        enumerable: true,
        configurable: true
    });
    AvaliacaoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._questoesService.getAll()
            .subscribe(function (q) {
            console.log(q);
            _this.questoes = q;
        });
        this.total = 0;
        this.media = 0;
        this.show = false;
        this.msg = '';
        this.avaliacaoForm = this.formBuilder.group({
            q1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q5: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q6: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q7: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q8: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q9: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q10: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            q11: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            comentario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            pontuacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            usuario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            software: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.route.paramMap.subscribe(function (params) {
            _this.currentSoftware = params;
            _this.f.software.setValue(_this.currentSoftware.get('id'));
            _this._sugestaoService.getById(_this.currentSoftware.get('id'))
                .subscribe(function (s) { return _this.software = s; });
        });
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this.f.usuario.setValue(_this.currentUser.id);
            _this.f.nome.setValue(_this.currentUser.nome);
        });
    };
    AvaliacaoComponent.ctorParameters = function () { return [
        { type: _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_6__["AvaliacaoService"] },
        { type: _app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__["QuestoesService"] },
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_7__["SugestaoService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_8__["PendenciaService"] }
    ]; };
    AvaliacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avaliacao',
            template: __webpack_require__(/*! raw-loader!./avaliacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/avaliacao/avaliacao.component.html"),
            styles: [__webpack_require__(/*! ./avaliacao.component.less */ "./src/app/components/avaliacao/avaliacao.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_6__["AvaliacaoService"],
            _app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__["QuestoesService"],
            _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_7__["SugestaoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_8__["PendenciaService"]])
    ], AvaliacaoComponent);
    return AvaliacaoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/ano-letivo/ano-letivo.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/ano-letivo/ano-letivo.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9hbm8tbGV0aXZvL2Fuby1sZXRpdm8uY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/ano-letivo/ano-letivo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/home/ano-letivo/ano-letivo.component.ts ***!
  \********************************************************************/
/*! exports provided: AnoLetivoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnoLetivoComponent", function() { return AnoLetivoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnoLetivoComponent = /** @class */ (function () {
    function AnoLetivoComponent() {
        this.anos = ["2019", "2019"];
    }
    AnoLetivoComponent.prototype.ngOnInit = function () {
    };
    AnoLetivoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ano-letivo',
            template: __webpack_require__(/*! raw-loader!./ano-letivo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/ano-letivo/ano-letivo.component.html"),
            styles: [__webpack_require__(/*! ./ano-letivo.component.less */ "./src/app/components/home/ano-letivo/ano-letivo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnoLetivoComponent);
    return AnoLetivoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/card/card.component.less":
/*!**********************************************************!*\
  !*** ./src/app/components/home/card/card.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jYXJkL2NhcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/card/card.component.ts":
/*!********************************************************!*\
  !*** ./src/app/components/home/card/card.component.ts ***!
  \********************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/avaliacao.service */ "./src/app/_services/avaliacao.service.ts");



var CardComponent = /** @class */ (function () {
    function CardComponent(_avaliacaoService) {
        this._avaliacaoService = _avaliacaoService;
    }
    CardComponent.prototype.getNota = function (n) {
        var _this = this;
        this.valor = 0;
        this.quant = n.data.length;
        console.log('-->avaliação', n.data.length);
        n.data.forEach(function (e) {
            _this.valor = _this.valor + e.pontuacao;
            console.log(_this.valor);
        });
    };
    CardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._avaliacaoService.getBySoftId(this.id)
            .subscribe(function (a) {
            _this.getNota(a);
        });
        console.log("nome", this.nome);
    };
    CardComponent.prototype.onRate = function ($event) {
        // alert(`Old Value:${$event.oldValue}, 
        //   New Value: ${$event.newValue}, 
        //   Checked Color: ${$event.starRating.checkedcolor}, 
        //   Unchecked Color: ${$event.starRating.uncheckedcolor}`);
        console.log("Old Value:" + $event.oldValue + ", \n      New Value: " + $event.newValue + ", \n      Checked Color: " + $event.starRating.checkedcolor + ", \n      Unchecked Color: " + $event.starRating.uncheckedcolor);
    };
    CardComponent.ctorParameters = function () { return [
        { type: _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_2__["AvaliacaoService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "nome", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "site", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "desenvolvedor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "anoletivo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "conteudo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "descricao", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "rating", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "instrucoesdeuso", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "img", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CardComponent.prototype, "id", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.less */ "./src/app/components/home/card/card.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_2__["AvaliacaoService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/conteudo/conteudo.component.less":
/*!******************************************************************!*\
  !*** ./src/app/components/home/conteudo/conteudo.component.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9jb250ZXVkby9jb250ZXVkby5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/home/conteudo/conteudo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/home/conteudo/conteudo.component.ts ***!
  \****************************************************************/
/*! exports provided: ConteudoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConteudoComponent", function() { return ConteudoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConteudoComponent = /** @class */ (function () {
    function ConteudoComponent() {
        this.conteudo = ["Oceano", "Amazonia", "Europa"];
    }
    ConteudoComponent.prototype.ngOnInit = function () {
    };
    ConteudoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-conteudo',
            template: __webpack_require__(/*! raw-loader!./conteudo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/conteudo/conteudo.component.html"),
            styles: [__webpack_require__(/*! ./conteudo.component.less */ "./src/app/components/home/conteudo/conteudo.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConteudoComponent);
    return ConteudoComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, sugestServ) {
        this.userService = userService;
        this.sugestServ = sugestServ;
        this.loading = false;
    }
    HomeComponent.prototype.getSistema = function () {
        var _this = this;
        this.sugestServ.getAll()
            .subscribe(function (s) {
            _this.sistema = s;
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSistema();
        this.loading = true;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (users) {
            _this.loading = false;
            _this.users = users;
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_4__["SugestaoService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_4__["SugestaoService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/inicial/inicial.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/inicial/inicial.component.ts ***!
  \*********************************************************/
/*! exports provided: InicialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicialComponent", function() { return InicialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var InicialComponent = /** @class */ (function () {
    function InicialComponent(sugestServ, formBuilder) {
        this.sugestServ = sugestServ;
        this.formBuilder = formBuilder;
    }
    InicialComponent.prototype.getSistema = function () {
        var _this = this;
        this.sugestServ.getAll()
            .subscribe(function (s) {
            _this.sistema = s;
        });
    };
    InicialComponent.prototype.setConteudo = function () {
        switch (this.sugestForm.get('anoletivo').value) {
            case "1":
                this.conteudo = {
                    '1': 'Origem da Vida',
                    '2': 'Bioquímica Celular',
                    '3': 'Citologia',
                    '4': 'Embriologia'
                };
                break;
            case "2":
                this.conteudo = {
                    '1': 'Biodiversidade dos Seres Vivos',
                    '2': 'Anatomia e Fisiologia Humana',
                    '3': 'Homeostase',
                    '4': 'Embriologia'
                };
                break;
            case "3":
                this.conteudo = {
                    '1': 'Genética',
                    '2': 'Evolução',
                    '3': 'Ecologia',
                };
                break;
            default:
                break;
        }
        console.log(this.conteudo);
    };
    InicialComponent.prototype.onSubmit = function (sugestao) {
        var _this = this;
        console.log(this.sugestForm.value);
        this.sugestServ.getFilter(this.sugestForm.value.anoletivo, this.sugestForm.value.conteudo)
            .subscribe(function (r) {
            console.log(r);
            _this.sistema = r;
        });
    };
    InicialComponent.prototype.ngOnInit = function () {
        this.sugestForm = this.formBuilder.group({
            anoletivo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conteudo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.getSistema();
    };
    InicialComponent.ctorParameters = function () { return [
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    InicialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./inicial.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/inicial/inicial.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], InicialComponent);
    return InicialComponent;
}());



/***/ }),

/***/ "./src/app/components/login/index.ts":
/*!*******************************************!*\
  !*** ./src/app/components/login/index.ts ***!
  \*******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/components/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html") }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/pendencia/pendencia.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/pendencia/pendencia.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGVuZGVuY2lhL3BlbmRlbmNpYS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/pendencia/pendencia.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pendencia/pendencia.component.ts ***!
  \*************************************************************/
/*! exports provided: PendenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendenciaComponent", function() { return PendenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/pendencia.service */ "./src/app/_services/pendencia.service.ts");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");




var PendenciaComponent = /** @class */ (function () {
    function PendenciaComponent(_pendenciaService, authenticationService) {
        this._pendenciaService = _pendenciaService;
        this.authenticationService = authenticationService;
    }
    PendenciaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this._pendenciaService.getByUser(_this.currentUser.id).subscribe(function (p) {
                _this.pendencia = p;
                if (_this.pendencia.data.length == 0) {
                    _this.pendencia = null;
                }
            });
        });
    };
    PendenciaComponent.ctorParameters = function () { return [
        { type: _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_2__["PendenciaService"] },
        { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    PendenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pendencia',
            template: __webpack_require__(/*! raw-loader!./pendencia.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pendencia/pendencia.component.html"),
            styles: [__webpack_require__(/*! ./pendencia.component.less */ "./src/app/components/pendencia/pendencia.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_2__["PendenciaService"],
            _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], PendenciaComponent);
    return PendenciaComponent;
}());



/***/ }),

/***/ "./src/app/components/questoes/questoes.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/questoes/questoes.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3RvZXMvcXVlc3RvZXMuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/questoes/questoes.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/questoes/questoes.component.ts ***!
  \***********************************************************/
/*! exports provided: QuestoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestoesComponent", function() { return QuestoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/questoes.service */ "./src/app/_services/questoes.service.ts");



var QuestoesComponent = /** @class */ (function () {
    function QuestoesComponent(_questoesService) {
        this._questoesService = _questoesService;
    }
    QuestoesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._questoesService.getAll()
            .subscribe(function (q) {
            console.log(q);
            _this.questoes = q;
        });
    };
    QuestoesComponent.ctorParameters = function () { return [
        { type: _app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__["QuestoesService"] }
    ]; };
    QuestoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questoes',
            template: __webpack_require__(/*! raw-loader!./questoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/questoes/questoes.component.html"),
            styles: [__webpack_require__(/*! ./questoes.component.less */ "./src/app/components/questoes/questoes.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_questoes_service__WEBPACK_IMPORTED_MODULE_2__["QuestoesService"]])
    ], QuestoesComponent);
    return QuestoesComponent;
}());



/***/ }),

/***/ "./src/app/components/software/software-alterar/software-alterar.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/components/software/software-alterar/software-alterar.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUtYWx0ZXJhci9zb2Z0d2FyZS1hbHRlcmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/software/software-alterar/software-alterar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/software/software-alterar/software-alterar.component.ts ***!
  \************************************************************************************/
/*! exports provided: SoftwareAlterarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareAlterarComponent", function() { return SoftwareAlterarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SoftwareAlterarComponent = /** @class */ (function () {
    function SoftwareAlterarComponent(fb, cd, authenticationService, sugestServ, formBuilder, route) {
        this.fb = fb;
        this.cd = cd;
        this.authenticationService = authenticationService;
        this.sugestServ = sugestServ;
        this.formBuilder = formBuilder;
        this.route = route;
        this.formGroup = this.fb.group({
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    SoftwareAlterarComponent.prototype.onFileChange = function (event) {
        var _this = this;
        console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](event.target.files, 1), file = _a[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                console.log(reader.result, reader);
                _this.sugestForm.controls.img.setValue(reader.result);
                _this.cd.markForCheck();
            };
        }
    };
    SoftwareAlterarComponent.prototype.setConteudo = function () {
        switch (this.sugestForm.get('anoletivo').value) {
            case "1":
                this.conteudo = {
                    '1': 'Origem da Vida',
                    '2': 'Bioquímica Celular',
                    '3': 'Citologia',
                    '4': 'Embriologia'
                };
                break;
            case "2":
                this.conteudo = {
                    '1': 'Biodiversidade dos Seres Vivos',
                    '2': 'Anatomia e Fisiologia Humana',
                    '3': 'Homeostase',
                    '4': 'Embriologia'
                };
                break;
            case "3":
                this.conteudo = {
                    '1': 'Genética',
                    '2': 'Evolução',
                    '3': 'Ecologia',
                };
                break;
            default:
                break;
        }
        console.log(this.conteudo);
    };
    SoftwareAlterarComponent.prototype.onSubmit = function (sugestao) {
        var _this = this;
        this.submitted = true;
        console.log(this.sugestForm.value._id);
        this.sugestServ.update(this.sugestForm.value._id, this.sugestForm.value)
            .subscribe(function (r) {
            _this.show = true;
            _this.msg = 'Cadastro atualizado com sucesso';
        });
    };
    Object.defineProperty(SoftwareAlterarComponent.prototype, "f", {
        get: function () { return this.sugestForm.controls; },
        enumerable: true,
        configurable: true
    });
    SoftwareAlterarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sugestForm = this.formBuilder.group({
            _id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            indicadopor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            site: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desenvolvedor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            anoletivo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conteudo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            intrucoesdeuso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.route.paramMap.subscribe(function (params) {
            console.log(params.getAll('id'));
            _this.sugestServ.getById(params.get('id'))
                .subscribe(function (r) {
                console.log(r);
                _this._sugestForm = r;
                _this.f._id.setValue(_this._sugestForm._id);
                _this.f.indicadopor.setValue(_this._sugestForm.indicadopor);
                _this.f.nome.setValue(_this._sugestForm.nome);
                _this.f.site.setValue(_this._sugestForm.site);
                _this.f.desenvolvedor.setValue(_this._sugestForm.desenvolvedor);
                _this.f.anoletivo.setValue(_this._sugestForm.anoletivo);
                _this.f.descricao.setValue(_this._sugestForm.descricao);
                _this.f.intrucoesdeuso.setValue(_this._sugestForm.intrucoesdeuso);
                _this.f.img.setValue(_this._sugestForm.img);
                console.log(_this.f);
            });
        });
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this.sugestForm.controls.indicadopor.setValue(_this.currentUser.id);
        });
        this.show = false;
        this.msg = '';
    };
    SoftwareAlterarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    SoftwareAlterarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-alterar',
            template: __webpack_require__(/*! raw-loader!./software-alterar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/software/software-alterar/software-alterar.component.html"),
            styles: [__webpack_require__(/*! ./software-alterar.component.less */ "./src/app/components/software/software-alterar/software-alterar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], SoftwareAlterarComponent);
    return SoftwareAlterarComponent;
}());



/***/ }),

/***/ "./src/app/components/software/software-cadastrar/software-cadastrar.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/components/software/software-cadastrar/software-cadastrar.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUtY2FkYXN0cmFyL3NvZnR3YXJlLWNhZGFzdHJhci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/software/software-cadastrar/software-cadastrar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/software/software-cadastrar/software-cadastrar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SoftwareCadastrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareCadastrarComponent", function() { return SoftwareCadastrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");





var SoftwareCadastrarComponent = /** @class */ (function () {
    function SoftwareCadastrarComponent(fb, cd, authenticationService, sugestServ, formBuilder) {
        this.fb = fb;
        this.cd = cd;
        this.authenticationService = authenticationService;
        this.sugestServ = sugestServ;
        this.formBuilder = formBuilder;
        this.formGroup = this.fb.group({
            file: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    SoftwareCadastrarComponent.prototype.onFileChange = function (event) {
        var _this = this;
        console.log(event);
        var reader = new FileReader();
        if (event.target.files && event.target.files.length) {
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](event.target.files, 1), file = _a[0];
            reader.readAsDataURL(file);
            reader.onload = function () {
                console.log(reader.result, reader);
                _this.sugestForm.controls.img.setValue(reader.result);
                _this.cd.markForCheck();
            };
        }
    };
    SoftwareCadastrarComponent.prototype.setConteudo = function () {
        switch (this.sugestForm.get('anoletivo').value) {
            case "1":
                this.conteudo = {
                    '1': 'Origem da Vida',
                    '2': 'Bioquímica Celular',
                    '3': 'Citologia',
                    '4': 'Embriologia'
                };
                break;
            case "2":
                this.conteudo = {
                    '1': 'Biodiversidade dos Seres Vivos',
                    '2': 'Anatomia e Fisiologia Humana',
                    '3': 'Homeostase',
                    '4': 'Embriologia'
                };
                break;
            case "3":
                this.conteudo = {
                    '1': 'Genética',
                    '2': 'Evolução',
                    '3': 'Ecologia',
                };
                break;
            default:
                break;
        }
        console.log(this.conteudo);
    };
    SoftwareCadastrarComponent.prototype.onSubmit = function (sugestao) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.sugestForm.invalid) {
            return;
        }
        console.log('inserir', sugestao);
        this.sugestServ.add(sugestao).subscribe(function (r) {
            _this.show = true;
            _this.msg = 'Cadastro efetuado com sucesso';
        });
    };
    Object.defineProperty(SoftwareCadastrarComponent.prototype, "f", {
        get: function () { return this.sugestForm.controls; },
        enumerable: true,
        configurable: true
    });
    SoftwareCadastrarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sugestForm = this.formBuilder.group({
            indicadopor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            site: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            desenvolvedor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            anoletivo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            conteudo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descricao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            intrucoesdeuso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            img: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this.sugestForm.controls.indicadopor.setValue(_this.currentUser.id);
        });
        this.show = false;
        this.msg = '';
    };
    SoftwareCadastrarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    SoftwareCadastrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-cadastrar',
            template: __webpack_require__(/*! raw-loader!./software-cadastrar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/software/software-cadastrar/software-cadastrar.component.html"),
            styles: [__webpack_require__(/*! ./software-cadastrar.component.less */ "./src/app/components/software/software-cadastrar/software-cadastrar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SoftwareCadastrarComponent);
    return SoftwareCadastrarComponent;
}());



/***/ }),

/***/ "./src/app/components/software/software-consultar/software-consultar.component.less":
/*!******************************************************************************************!*\
  !*** ./src/app/components/software/software-consultar/software-consultar.component.less ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUtY29uc3VsdGFyL3NvZnR3YXJlLWNvbnN1bHRhci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/software/software-consultar/software-consultar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/software/software-consultar/software-consultar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SoftwareConsultarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareConsultarComponent", function() { return SoftwareConsultarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services/avaliacao.service */ "./src/app/_services/avaliacao.service.ts");
/* harmony import */ var _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/_services/authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony import */ var _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/_services/pendencia.service */ "./src/app/_services/pendencia.service.ts");







var SoftwareConsultarComponent = /** @class */ (function () {
    function SoftwareConsultarComponent(sugestServ, route, _avaliacaoService, _authenticationService, _pendenciaService) {
        this.sugestServ = sugestServ;
        this.route = route;
        this._avaliacaoService = _avaliacaoService;
        this._authenticationService = _authenticationService;
        this._pendenciaService = _pendenciaService;
    }
    SoftwareConsultarComponent.prototype.getIndicatios = function (id) {
        var _this = this;
        this.sugestServ.getById(id)
            .subscribe(function (i) {
            console.log('indications', i);
            _this.myIndications = i;
        });
    };
    SoftwareConsultarComponent.prototype.exibeLInks = function (userId) {
        var _this = this;
        this.showLink = false;
        this.showAvaliar = false;
        this._pendenciaService.getByUser(userId)
            .subscribe(function (p) {
            _this.pendencia = p;
            console.log('pendencia.data', _this.pendencia.data.length);
            if (_this.pendencia.data.length > 0) {
                _this.showAvaliar = true;
            }
            else {
                _this.showLink = true;
            }
        });
        console.log('exibe', this.showLink, this.showAvaliar);
    };
    SoftwareConsultarComponent.prototype.gerarPendenca = function (id, nome) {
        var _this = this;
        console.log('gerarPendenca', id, nome, this.currentUser);
        this._pendenciaService.add({
            "user_id": this.currentUser.id,
            "user_name": this.currentUser.nome,
            "software_id": id,
            "software_nome": nome
        }).subscribe(function (p) {
            console.log('pendencia inserida', p);
            _this.ngOnInit();
        });
    };
    SoftwareConsultarComponent.prototype.getAvaliacao = function (id) {
        var _this = this;
        this._avaliacaoService.getBySoftId(id)
            .subscribe(function (a) { return _this.avaliacao = a; });
    };
    SoftwareConsultarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.software_id = params.get('id');
            _this.getIndicatios(params.get('id'));
            _this.getAvaliacao(params.get('id'));
        });
        this._authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this.exibeLInks(_this.currentUser.id);
        });
    };
    SoftwareConsultarComponent.ctorParameters = function () { return [
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_4__["AvaliacaoService"] },
        { type: _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
        { type: _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_6__["PendenciaService"] }
    ]; };
    SoftwareConsultarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-consultar',
            template: __webpack_require__(/*! raw-loader!./software-consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/software/software-consultar/software-consultar.component.html"),
            styles: [__webpack_require__(/*! ./software-consultar.component.less */ "./src/app/components/software/software-consultar/software-consultar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_2__["SugestaoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _app_services_avaliacao_service__WEBPACK_IMPORTED_MODULE_4__["AvaliacaoService"],
            _app_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _app_services_pendencia_service__WEBPACK_IMPORTED_MODULE_6__["PendenciaService"]])
    ], SoftwareConsultarComponent);
    return SoftwareConsultarComponent;
}());



/***/ }),

/***/ "./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.less":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.less ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUtbWV1cy1zdWdlcmlkb3Mvc29mdHdhcmUtbWV1cy1zdWdlcmlkb3MuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SoftwareMeusSugeridosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareMeusSugeridosComponent", function() { return SoftwareMeusSugeridosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/_services/sugestao.service */ "./src/app/_services/sugestao.service.ts");




var SoftwareMeusSugeridosComponent = /** @class */ (function () {
    function SoftwareMeusSugeridosComponent(sugestServ, authenticationService) {
        this.sugestServ = sugestServ;
        this.authenticationService = authenticationService;
    }
    SoftwareMeusSugeridosComponent.prototype.getIndicatios = function (id) {
        var _this = this;
        this.sugestServ.getIndication(id)
            .subscribe(function (i) {
            console.log('indications', i);
            _this.myIndications = i;
        });
    };
    SoftwareMeusSugeridosComponent.prototype.remove = function (id) {
        var _this = this;
        console.log('remover', id);
        this.sugestServ.remove(id)
            .subscribe(function (r) { return _this.getIndicatios(_this.currentUser.id); });
    };
    SoftwareMeusSugeridosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authenticationService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            _this.getIndicatios(_this.currentUser.id);
        });
    };
    SoftwareMeusSugeridosComponent.ctorParameters = function () { return [
        { type: _app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_3__["SugestaoService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    SoftwareMeusSugeridosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-meus-sugeridos',
            template: __webpack_require__(/*! raw-loader!./software-meus-sugeridos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.html"),
            styles: [__webpack_require__(/*! ./software-meus-sugeridos.component.less */ "./src/app/components/software/software-meus-sugeridos/software-meus-sugeridos.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services_sugestao_service__WEBPACK_IMPORTED_MODULE_3__["SugestaoService"],
            _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], SoftwareMeusSugeridosComponent);
    return SoftwareMeusSugeridosComponent;
}());



/***/ }),

/***/ "./src/app/components/software/software.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/software/software.component.less ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29mdHdhcmUvc29mdHdhcmUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/components/software/software.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/software/software.component.ts ***!
  \***********************************************************/
/*! exports provided: SoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareComponent", function() { return SoftwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoftwareComponent = /** @class */ (function () {
    function SoftwareComponent() {
    }
    SoftwareComponent.prototype.ngOnInit = function () {
    };
    SoftwareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software',
            template: __webpack_require__(/*! raw-loader!./software.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/software/software.component.html"),
            styles: [__webpack_require__(/*! ./software.component.less */ "./src/app/components/software/software.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoftwareComponent);
    return SoftwareComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario-alterar/usuario-alterar.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-alterar/usuario-alterar.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLWFsdGVyYXIvdXN1YXJpby1hbHRlcmFyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/usuario/usuario-alterar/usuario-alterar.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-alterar/usuario-alterar.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsuarioAlterarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioAlterarComponent", function() { return UsuarioAlterarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UsuarioAlterarComponent = /** @class */ (function () {
    function UsuarioAlterarComponent(formBuilder, route, router, userServ, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userServ = userServ;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    Object.defineProperty(UsuarioAlterarComponent.prototype, "f", {
        get: function () { return this.regForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsuarioAlterarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.regForm.invalid) {
            return;
        }
        this.loading = true;
        this.userServ.updateUser(this.authenticationService.currentUserValue.id, this.regForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.authenticationService.logout();
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    UsuarioAlterarComponent.prototype.ngOnInit = function () {
        this.regForm = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ocupacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        console.log(this.authenticationService.currentUserValue);
        this.regForm.get('nome').setValue(this.authenticationService.currentUserValue.nome);
        this.regForm.get('ocupacao').setValue(this.authenticationService.currentUserValue.ocupacao);
        this.regForm.get('email').setValue(this.authenticationService.currentUserValue.username);
        this.regForm.get('sexo').setValue(this.authenticationService.currentUserValue.sexo);
        this.regForm.get('password').setValue(this.authenticationService.currentUserValue.password);
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
    };
    UsuarioAlterarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    UsuarioAlterarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-alterar',
            template: __webpack_require__(/*! raw-loader!./usuario-alterar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-alterar/usuario-alterar.component.html"),
            styles: [__webpack_require__(/*! ./usuario-alterar.component.less */ "./src/app/components/usuario/usuario-alterar/usuario-alterar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
    ], UsuarioAlterarComponent);
    return UsuarioAlterarComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.less":
/*!***************************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.less ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLWNhZGFzdHJhci91c3VhcmlvLWNhZGFzdHJhci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UsuarioCadastrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioCadastrarComponent", function() { return UsuarioCadastrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var UsuarioCadastrarComponent = /** @class */ (function () {
    function UsuarioCadastrarComponent(formBuilder, route, router, userServ) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.userServ = userServ;
        this.loading = false;
        this.submitted = false;
        this.error = '';
    }
    Object.defineProperty(UsuarioCadastrarComponent.prototype, "f", {
        get: function () { return this.regForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsuarioCadastrarComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.regForm.invalid) {
            return;
        }
        this.loading = true;
        this.userServ.registerUser({
            email: this.f.email.value,
            password: this.f.password.value,
            nome: this.f.nome.value,
            ocupacao: this.f.ocupacao.value,
            sexo: this.f.sexo.value,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.error = error;
            _this.loading = false;
        });
    };
    UsuarioCadastrarComponent.prototype.ngOnInit = function () {
        this.regForm = this.formBuilder.group({
            nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ocupacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    UsuarioCadastrarComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    UsuarioCadastrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-cadastrar',
            template: __webpack_require__(/*! raw-loader!./usuario-cadastrar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.html"),
            styles: [__webpack_require__(/*! ./usuario-cadastrar.component.less */ "./src/app/components/usuario/usuario-cadastrar/usuario-cadastrar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UsuarioCadastrarComponent);
    return UsuarioCadastrarComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario-consultar/usuario-consultar.component.less":
/*!***************************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-consultar/usuario-consultar.component.less ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLWNvbnN1bHRhci91c3VhcmlvLWNvbnN1bHRhci5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/components/usuario/usuario-consultar/usuario-consultar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-consultar/usuario-consultar.component.ts ***!
  \*************************************************************************************/
/*! exports provided: UsuarioConsultarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioConsultarComponent", function() { return UsuarioConsultarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/_services */ "./src/app/_services/index.ts");



var UsuarioConsultarComponent = /** @class */ (function () {
    function UsuarioConsultarComponent(authenticationService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    UsuarioConsultarComponent.prototype.ngOnInit = function () { };
    UsuarioConsultarComponent.ctorParameters = function () { return [
        { type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    UsuarioConsultarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-consultar',
            template: __webpack_require__(/*! raw-loader!./usuario-consultar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-consultar/usuario-consultar.component.html"),
            styles: [__webpack_require__(/*! ./usuario-consultar.component.less */ "./src/app/components/usuario/usuario-consultar/usuario-consultar.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UsuarioConsultarComponent);
    return UsuarioConsultarComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario-excluir/usuario-excluir.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-excluir/usuario-excluir.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLWV4Y2x1aXIvdXN1YXJpby1leGNsdWlyLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/usuario/usuario-excluir/usuario-excluir.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/usuario/usuario-excluir/usuario-excluir.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UsuarioExcluirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioExcluirComponent", function() { return UsuarioExcluirComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsuarioExcluirComponent = /** @class */ (function () {
    function UsuarioExcluirComponent() {
    }
    UsuarioExcluirComponent.prototype.ngOnInit = function () {
    };
    UsuarioExcluirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario-excluir',
            template: __webpack_require__(/*! raw-loader!./usuario-excluir.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario-excluir/usuario-excluir.component.html"),
            styles: [__webpack_require__(/*! ./usuario-excluir.component.less */ "./src/app/components/usuario/usuario-excluir/usuario-excluir.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsuarioExcluirComponent);
    return UsuarioExcluirComponent;
}());



/***/ }),

/***/ "./src/app/components/usuario/usuario.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.less ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXN1YXJpby91c3VhcmlvLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/components/usuario/usuario.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent() {
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.less */ "./src/app/components/usuario/usuario.component.less")]
        })
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://crtcc.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/daniel/works/caroline/bioeduca/crtcc-front/ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map