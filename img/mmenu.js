root=''

rnode = AddRootNode('������',root+'/index.html');

rnode = AddRootNode('���&nbsp;�����������',root+'/micros/');
	node1 = AddNode(rnode, '�������&nbsp;��&nbsp;STM32',root+'/micros/stm32/');
		AddNode(node1, '����',root+'/micros/stm32/7-seg-clock/');
	node1 = AddNode(rnode, '�������&nbsp;��&nbsp;AT89C2051',root+'/micros/at89c2051/');
		AddNode(node1, '��������',root+'/micros/at89c2051/svetofor/');
		AddNode(node1, '��������',root+'/micros/at89c2051/tachometer/');
		AddNode(node1, '���������&nbsp;��������',root+'/micros/at89c2051/power-reg/');
	node1 = AddNode(rnode, '�������&nbsp;��&nbsp;AtMega',root+'/micros/mega/');
		AddNode(node1, '��������&nbsp;����������',root+'/micros/mega/charger/');
		AddNode(node1, '������� �� Nokia&nbsp;6100',root+'/micros/lcd/nokia6100/');
	node1 = AddNode(rnode, '�������&nbsp;��&nbsp;AtTiny',root+'/micros/tiny/');
		AddNode(node1, '��������������&nbsp;���������',root+'/micros/tiny/leds/');
		AddNode(node1, '������� �� Nokia&nbsp;3310',root+'/micros/lcd/nokia3310/');
	node1 = AddNode(rnode, '������&nbsp;�������',root+'/micros/other/');
		AddNode(node1, '�����&nbsp;�����&nbsp;������',root+'/micros/other/step-down-34063/');
	node1 = AddNode(rnode, '��&nbsp;�������',root+'/micros/lcd/');
		AddNode(node1, 'Nokia&nbsp;3310',root+'/micros/lcd/nokia3310/');
		AddNode(node1, 'Nokia&nbsp;7110',root+'/micros/lcd/nokia7110/');
		AddNode(node1, 'Nokia&nbsp;6100',root+'/micros/lcd/nokia6100/');

rnode = AddRootNode('���&nbsp;�������',root+'/robots/');
	node1 = AddNode(rnode, '�������&nbsp;������',root+'/robots/motor-driver/');
//	node1 = AddNode(rnode, '���������',root+'/robots/radio-link/');
//	node1 = AddNode(rnode, '�����',root+'/robots/servo-controller/');
	node1 = AddNode(rnode, '�������&nbsp;����',root+'/robots/wheel-base/');

rnode = AddRootNode('���&nbsp;����������',root+'/leds/');
	node1 = AddNode(rnode, '������������&nbsp;������&nbsp;��&nbsp;21��',root+'/leds/led-lamp-21w/');
	node1 = AddNode(rnode, '�������&nbsp;��&nbsp;300��',root+'/leds/led-driver-300ma/');

rnode = AddRootNode('���&nbsp;����������',root+'/computers/');
	node1 = AddNode(rnode, '�����������&nbsp;NAS',root+'/computers/nas/');

rnode = AddRootNode('���&nbsp;���&nbsp;������',root+'/izh/');
	node1 = AddNode(rnode, '���������',root+'/izh/tech/');
		AddNode(node1, '���������&nbsp;�����&nbsp;���������',root+'/izh/tech/rele/');
		AddNode(node1, '��������������&nbsp;��������������',root+'/izh/tech/hobot/');
		AddNode(node1, '���������&nbsp;��&nbsp;5&nbsp;�����',root+'/izh/tech/actuator/');
		AddNode(node1, '���&nbsp;�&nbsp;���&nbsp;LUCAS',root+'/izh/tech/lucas/');
	node1 = AddNode(rnode, '�����',root+'/izh/album/');
	node1 = AddNode(rnode, '������',root+'/izh/links/');

//rnode = AddRootNode('������',root+'/other/');
rnode = AddRootNode('��������',root+'/contacts.html');
rnode = AddRootNode('����� �����',root+'/sitemap.html');

function ToggleTree()
{
	treediv = window.document.getElementById('nodes');
	contentdiv = window.document.getElementById('content');
	if (treediv)
	{
		if (treediv.style.display == 'none')
		{
			treediv.style.display = '';
			contentdiv.style.marginLeft = treediv.style.width;
		}
		else
		{
			treediv.style.display = 'none';
			contentdiv.style.marginLeft = 108;
		}
	}
}

function SiteHead() {

	document.title='AHTOXA.NET : ' + GetTitlePath();
	document.write('<a name="top"></a>');
	document.write('<div id="document">');
	document.write('<div id="logo"><a href="'+root+'/">&nbsp;</a></div>');
	document.write('<div id="siteTitle"><span>AHTOXA.NET</span></div>');
	document.write('<div id="doctree">');
	document.write('<a  class="treelink" href="javascript:void(0);" onClick=ToggleTree() title="��������/�������� ����������">����������</a>');
	document.write('<div id="nodes">');

	DisplayNodes();

	document.write('</div>');
	document.write('</div>');

	document.write('<hr class="invisible" />');
	document.write('<div id="content">');
	DisplayLinkedPath();

}

function SiteFoot() {
	document.write('</div></div><div id="bottom">');
	document.write('<a href=#top>top</a>');
	document.write('<span class="copyright">&copy; AHTOXA, 2006-2014.</span></div>');
}
