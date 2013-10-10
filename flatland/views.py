from django.shortcuts import render_to_response
from django.shortcuts import RequestContext

import json


def start(request):
	"""Perhaps the only view of the flatland app."""
	data = {}

	data['mode'] = '2d'

	return render_to_response( 	'flatland.html',
								{
									'data': json.dumps(data)
								},
								context_instance = RequestContext(request) )
