# -*- coding: utf-8 -*-
from zope.publisher.interfaces.browser import IBrowserRequest
from zope.app.rotterdam import Rotterdam


class IEDemLayer(IBrowserRequest):
    '''e-Democracy.org Layer'''


class IEDemSkin(IEDemLayer, Rotterdam):
    '''e-Democracy.org Skin'''
