from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import flatland.views


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'flatland.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
	url(r'^$', flatland.views.start), 
)
