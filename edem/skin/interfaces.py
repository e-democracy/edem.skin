# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals
from zope.publisher.interfaces.browser import IBrowserRequest
from zope.app.rotterdam import Rotterdam
from zope.schema import TextLine, Text, Choice
from gs.group.properties.interfaces import IGroupProperties
from zope.schema.vocabulary import SimpleVocabulary
import pytz


class IEDemLayer(IBrowserRequest):
    '''e-Democracy.org Layer'''


class IEDemSkin(IEDemLayer, Rotterdam):
    '''e-Democracy.org Skin'''


class IEDemGroupProperties(IGroupProperties):
    ptn_coach_id = TextLine(
        title='Participation Coach ID',
        description='The groupserver profile ID of the primary '
                    'participation coach/forum manager.',
        required=True)
    group_tz = Choice(
        title='Timezone',
        description='The timezone you wish to use as the default for the '
                    'group and users who join via the group.',
        required=True,
        default='US/Central',
        vocabulary=SimpleVocabulary.fromValues(pytz.common_timezones))
    facebookId = TextLine(
        title='Facebook ID',
        description='The ID of the group on Facebook, if the group has an '
                    'associated Facebook account.',
        required=False)
    twitterId = TextLine(
        title='Twitter ID',
        description='The ID of the group on Twitter, if the group has a '
                    'associated twitter account.',
        required=False)
    footer = Text(
        title='Additional Email Footer',
        description='A short snippet of text which will be displayed in the '
                    'footer of group emails.',
        required=False)
