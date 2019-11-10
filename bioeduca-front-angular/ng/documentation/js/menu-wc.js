'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bioeduca documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fee7ed5601397cbec5e93f5b832976b7"' : 'data-target="#xs-components-links-module-AppModule-fee7ed5601397cbec5e93f5b832976b7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fee7ed5601397cbec5e93f5b832976b7"' :
                                            'id="xs-components-links-module-AppModule-fee7ed5601397cbec5e93f5b832976b7"' }>
                                            <li class="link">
                                                <a href="components/AlertsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AvaliacaoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AvaliacaoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InicialComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InicialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendenciaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PendenciaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestoesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestoesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftwareAlterarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoftwareAlterarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftwareCadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoftwareCadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftwareConsultarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoftwareConsultarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SoftwareMeusSugeridosComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SoftwareMeusSugeridosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TopbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioAlterarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioAlterarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioCadastrarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioCadastrarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioConsultarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioConsultarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsuarioExcluirComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsuarioExcluirComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AvaliacaoService.html" data-type="entity-link">AvaliacaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PendenciaService.html" data-type="entity-link">PendenciaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestoesService.html" data-type="entity-link">QuestoesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SugestaoService.html" data-type="entity-link">SugestaoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link">UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});